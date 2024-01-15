import { addons } from '@storybook/manager-api';
import paperTheme from './paperTheme';

addons.setConfig({
  theme: paperTheme,
});