import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'wxt';

 

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-react'],
  manifest:  {
    name: "__MSG_extName__",
    description: "__MSG_extDescription__",
    default_locale: "en",
    host_permissions: [
      '*://steamcommunity.com/sharedfiles/filedetails/*',
      '*://steamcommunity.com/workshop/filedetails/*'
    ]
  },
  vite: ()=>({
    plugins:[
      tailwindcss()
    ]
  })
});
