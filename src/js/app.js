// Imports
import Cursor from '../js/cursor';
import {preloader} from '../js/preloader';
import LocomotiveScroll from 'locomotive-scroll';
import Menu from '../js/menu';

// menu (<nav> element)
const menuElement = document.querySelector('.menu');

// preload the images set as data attributes in the menu items
preloader('.menu_item').then(() => {
    
    // initiliase the smooth scroll
    const scroll = new LocomotiveScroll({ el: menuElement, smooth: true});

    // initialise custom cursor
    const cursor = new Cursor(document.querySelector('.cursor'));

    // initiliase menu
    new Menu(menuElement);
});