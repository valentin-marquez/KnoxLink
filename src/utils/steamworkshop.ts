/**
 * Extracts the workshop ID from a Steam URL
 */
export function extractWorkshopId(url: string): string | null {
  const workshopIdMatch = url.match(/\?id=(\d+)/) || 
                          url.match(/\/filedetails\/\?id=(\d+)/) || 
                          url.match(/\/(\d+)/);
  
  return workshopIdMatch && workshopIdMatch[1] ? workshopIdMatch[1] : null;
}

/**
 * Checks if the current page is a Project Zomboid mod
 */
export function isPZMod(): boolean {
  // Methods to detect if it's a PZ mod page
  const methods = [
    // Method 1: Look for a link containing the PZ app ID (108600)
    () => !!document.querySelector('a[href*="app/108600"]'),
    
    // Method 2: Check if the URL contains Project Zomboid's app ID
    () => window.location.href.includes('/app/108600') || 
          document.URL.includes('steamcommunity.com/app/108600'),
    
    // Method 3: Check if the page title contains "Project Zomboid"
    () => document.title.includes('Project Zomboid'),
    
    // Method 4: Check if the page content mentions "Project Zomboid"
    () => document.body.textContent?.includes('Project Zomboid') || false,
    
    // Method 5: Check for specific Workshop page elements
    () => {
      const workshopTitle = document.querySelector('.workshopItemTitle');
      const appName = document.querySelector('.apphub_AppName');
      return (workshopTitle && appName && appName.textContent?.includes('Project Zomboid')) || false;
    }
  ];
  
  // Return true if any of the methods returns true
  return methods.some(method => method());
}