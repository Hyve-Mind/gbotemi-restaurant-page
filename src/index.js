
import './style.css';
import { header } from './header';
import { homePage } from './home'
import { menuSection } from './menu'
import { contact } from './contact.js'
import {footer} from './footer'
let renderPage = (function(){
  let content = document.createElement('div');
  content.setAttribute('id', 'content');
  document.body.appendChild(content);
  content.appendChild(header);
  content.appendChild(homePage);
  // homePage.remove();
  // content.appendChild(menuSection);
  // menuSection.remove();
  // content.appendChild(contact);
  content.appendChild(footer);
})()

const homeBtn = document.querySelector('.homeBtn');
const menuBtn = document.querySelector('.menuBtn');
const contactBtn = document.querySelector('.contactBtn');
const content = document.querySelector('#content')
homeBtn.addEventListener("click",()=>{
  resetDom()
  content.appendChild(header)
  content.appendChild(homePage);
  content.appendChild(footer);
})
menuBtn.addEventListener("click",()=>{
  resetDom()
  content.appendChild(header)
  content.appendChild(menuSection);
  content.appendChild(footer);
})
contactBtn.addEventListener("click",()=>{
  resetDom()
  content.appendChild(header)
  content.appendChild(contact);
  content.appendChild(footer);
})

function resetDom(){
  header.remove();
  homePage.remove();
  menuSection.remove();
  contact.remove()
  footer.remove()
}



