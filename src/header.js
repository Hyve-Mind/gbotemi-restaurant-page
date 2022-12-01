import { factoryDiv } from "./factory";
import { factoryBtn } from "./factory";

export let header = (function header() {
    const headerDiv = factoryDiv('header','');
    const button1 = factoryBtn('homeBtn', 'Home');
    const button2 = factoryBtn('menuBtn', 'Menu');
    const button3 = factoryBtn('contactBtn', 'Contact');
    headerDiv.appendChild(button1);
    headerDiv.appendChild(button2);
    headerDiv.appendChild(button3);
    return headerDiv
})()

