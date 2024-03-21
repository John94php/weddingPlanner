import { registerReactControllerComponents } from '@symfony/ux-react';
import './bootstrap.js';
import './styles/app.css';

import "primereact/resources/themes/lara-light-cyan/theme.css";

import 'primeicons/primeicons.css';

registerReactControllerComponents(require.context('./react/controllers', true, /\.(j|t)sx?$/));
