import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { JFormContainerComponent } from '../../../app/tailjng/form/form-container/container-form.component';
//import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<JFormContainerComponent> = {
  title: 'Components/Form',
  component: JFormContainerComponent,

  tags: ['autodocs'],
  argTypes: {
    
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { },

  parameters:{
    docs:{
      codePanel:true,
      source: {type: 'auto', language: 'html'},
      layout: 'centered',
    }
    
  }
};

export default meta;
type Story = StoryObj<JFormContainerComponent>;

// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

export const Default: Story = {
  args: {
    columns: 1,
    rows: false
  },
  
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

