import { loadHeader } from './header';
import { loadFooter } from './footer';
import { loadHomePage } from './pages/home';
import { addEventListeners } from './eventListeners';
import './style.css';

loadHeader();

loadHomePage();

loadFooter();

addEventListeners();