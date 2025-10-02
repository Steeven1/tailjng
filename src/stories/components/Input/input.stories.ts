import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { JInputComponent } from '../../../app/tailjng/input/input/input.component';
//import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<JInputComponent> = {
  title: 'Components/Input',
  component: JInputComponent,

  tags: ['autodocs'],
  argTypes: {
    
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { },

  parameters:{
    docs:{
      codePanel:true,
      source: {type: 'auto', language: 'html'},
     
    }
    
  }
};

export default meta;
type Story = StoryObj<JInputComponent>;

// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

export const Primary: Story = {
  args: {
    id: 'primary',
    type: 'text',
    placeholder: 'Enter text',
    classes: 'primary'
  },
  
};

export const Secondary: Story = {
  args: {
    id: 'secondary',
    type: 'text',
    placeholder: 'Enter text',
    classes: 'secondary'
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

