import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark', // Usamos 'dark' como base
    brandTitle: 'Tailjng UI Component Library',
    brandUrl: 'https://storybook.js.org/recipes/tailwindcss',
    brandImage: '',
    brandTarget: '_self',

    // Colores principales
    // colorPrimary: '#3A10E5', // Opcional: Puedes mantenerlo si es adecuado para tu diseño
    colorSecondary: '#010ad3', // Mantenemos el color secundario brillante

    // UI
    appBg: '#121212', // Fondo oscuro para la aplicación
    appContentBg: '#1e1e1e', // Fondo del contenido
    appBorderColor: '#444', // Color del borde más claro
    appBorderRadius: 4, // Radio del borde

    // Colores de texto
    //textColor: '#ffffff', 
    textInverseColor: '#121212', // Texto inverso (oscuro)

    // Toolbar
    barTextColor: '#cccccc', // Texto de la barra de herramientas
    barSelectedColor: '#010ad3', // Color seleccionado en la barra
    barHoverColor: '#010ad3', // Color al pasar el ratón
    barBg: '#121212', // Fondo oscuro para la barra

    // Formularios
    inputBg: '#1e1e1e', // Fondo de los inputs
    inputBorder: '#444', // Borde de los inputs
    inputTextColor: '#ffffff', // Texto claro en los inputs
    inputBorderRadius: 4, // Radio del borde de los inputs
  }),
});