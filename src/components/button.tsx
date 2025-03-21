import React from 'react';
import { cn } from '@/utils';

interface ImportButtonProps {
  workshopId: string;
  url: string;
  className?: string;
}

export function ImportButton({ workshopId, url, className }: ImportButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    // Prevent default link behavior
    e.preventDefault();
    
    const encodedUrl = encodeURIComponent(url);
    window.location.href = `knoxkit://import-mod?url=${encodedUrl}`;
  };

  return (
    <a 
      href={`knoxkit://import-mod?url=${encodeURIComponent(url)}`}
      onClick={handleClick}
      className={cn(
        "flex items-center justify-center w-full mt-2 px-3 py-1.5",
        "bg-primary hover:bg-primary/90 active:bg-primary/80",
        "text-primary-foreground no-underline rounded",
        "text-sm font-medium cursor-pointer",
        "shadow hover:shadow-md active:shadow",
        "border border-primary/80",
        "transition-all duration-200 ease-in-out",
        "hover:translate-y-[-1px] active:translate-y-[1px]",
        "hover:scale-[1.01] active:scale-[0.99]",
        "animate-in fade-in-50 duration-300",
        className
      )}
    >
      <svg 
        className="w-3.5 h-3.5 mr-1.5 transition-transform group-hover:rotate-3 flex-shrink-0"
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      <span className="font-medium whitespace-nowrap overflow-hidden text-ellipsis">
        {(typeof browser !== 'undefined' && browser.i18n && browser.i18n.getMessage('importWithKnoxKit')) || 'Import with KnoxKit'}
      </span>
    </a>
  );
}