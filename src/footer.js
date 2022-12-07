import { factoryDiv } from "./factory";

export const footer = (function(){
  const footerContainer = factoryDiv('footer');
  const footer1 = factoryDiv('','Hive mind');
  const footer2 = factoryDiv('', 'The odin project');
  const footer3 = factoryDiv('', 'Hive Restaurant');
  footerContainer.appendChild(footer1);
  footerContainer.appendChild(footer2);
  footerContainer.appendChild(footer3);
  return footerContainer
})()