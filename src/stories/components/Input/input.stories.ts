import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { JInputComponent } from '../../../app/tailjng/input/input/input.component';
import { Input } from '@angular/core';
//import { ButtonComponent } from './button.component';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<JInputComponent> = {
  title: 'Components/Input',
  component: JInputComponent,



  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'number', 'date', 'datetime-local', 'email'],
      description: 'Tipo de entrada del campo.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'text' },
      },
    },

    id: {
      control: 'text',
      description: 'ID único del campo de entrada.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    placeholder: {
      control: 'text',
      description: 'Texto de marcador de posición del campo de entrada.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Indica si el campo está deshabilitado.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    required: {
      control: 'boolean',
      description: 'Indica si el campo es obligatorio.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    clearButton: {
      control: 'boolean',
      description: 'Muestra un botón para limpiar el valor del campo.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    classes: {
      control: 'text',
      description: 'Clases CSS adicionales para personalizar el estilo del campo.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    ngClass: {
      control: 'object',
      description: 'Objeto de clases condicionales para aplicar estilos dinámicos.',
      table: {
        type: { summary: 'Object' },
        defaultValue: { summary: '{}' },
      },
    },
    
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { 
    

  },

  parameters:{
    docs:{
      codePanel:true,
      source: {type: 'auto', language: 'html'},
      description:{
        component:`
        El componente \`JInput\` es un campo de entrada personalizado diseñado para ser utilizado en formularios.
        Proporciona funcionalidades como validación, limpieza de valores, y estilos personalizables. 
        Este componente implementa \`ControlValueAccessor\` para integrarse con formularios reactivos de Angular.
        `
      }
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
    id: 'secondary-input',
    type: 'password',
    placeholder: 'Contraseña',
    classes: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Un ejemplo del componente `JInput` con estilo secundario, utilizado para campos de contraseña.',
      },
    },
  }
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

