import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { JLabelComponent } from '../../../app/tailjng/label/label.component';
//import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<JLabelComponent> = {
  title: 'Components/Label',
  component: JLabelComponent,

  tags: ['autodocs'],
  argTypes: {
    
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { },


};

export default meta;
type Story = StoryObj<JLabelComponent>;

// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

export const For: Story = {
  args: {
    for: 'inputId',
    classes: 'primary',
    tooltip: 'This is a label for the input',
  },
  
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

