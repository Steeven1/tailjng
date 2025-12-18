import type { Preview } from '@storybook/angular'
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);
import { themes } from 'storybook/internal/theming';



const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    docs:{
      theme: themes.dark,
      source:{
        format: true,
        
      },
    }
  },
  
};

export default preview;