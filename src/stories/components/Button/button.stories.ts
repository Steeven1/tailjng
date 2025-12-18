import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { JButtonComponent } from '../../../app/tailjng/button/button.component';
import { themes } from 'storybook/internal/theming';
//import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<JButtonComponent> = {
  title: 'Components/Button',
  component: JButtonComponent,
  
  tags: ['autodocs'],
  argTypes: {
    
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { },

  parameters:{
    docs:{
      codePanel:true,
    },
    theme: themes.dark,
  }
};

export default meta;
type Story = StoryObj<JButtonComponent>;

// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

export const Primary: Story = {
  args: {
    type: 'button',
    text: 'Primary',
    tooltip: 'This is a primary button',
    classes: 'primary'
    
  },
  
};

export const Secondary: Story = {
  args: {
    type: 'button',
    text: 'Secondary',
    tooltip: 'This is a secondary button',
    classes: 'secondary'
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

