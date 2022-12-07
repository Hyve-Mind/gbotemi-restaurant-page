import { factoryDiv, factoryImage } from "./factory";
import cocacola from '/assets/cocacola.jpeg';
import coffeeImg from '/assets/coffee.jpeg';
import energyDrinkImg from '/assets/energyDrink.jpeg'
import orangeDrinkImg from '/assets/orangeDrink.jpeg'
import iceCreamImg from '/assets/iceCream.jpeg'
import angryBurgerImg from '/assets/angryBurger.jpeg'
import happyBurgerImg from '/assets/happyBurger.jpeg'
import friesImg from '/assets/fries.jpeg'
import fruitSaladImg from '/assets/fruit salad.jpeg'
import riceImg from '/assets/rice.jpeg'
import spaghettiImg from '/assets/spaghetti.jpeg'
import breadImg from '/assets/bread.jpeg'
const superCoke = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = factoryDiv('menuList');
    menuName = factoryDiv('', 'Super coke');
    menuDescription = factoryDiv('', 'A galactic drink with insane sugar rush!,A gulp is usually enough');
    menuPrice = factoryDiv('', '$1.99');
    menuImage = factoryImage(cocacola, 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage);
    return menuList
})()

const coffee = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = factoryDiv('menuList');
    menuName = factoryDiv('', 'Coffee');
    menuDescription = factoryDiv('', 'Programmers favourites!, best taken early in the morning.');
    menuPrice = factoryDiv('', '$2.50');
    menuImage = factoryImage(coffeeImg, 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()

const energyDrink = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = factoryDiv('menuList');
    menuName = factoryDiv('', 'Energy Drink');
    menuDescription = factoryDiv('', 'Are you feeling tired lately?,a medium sized cup increases your energy by 240%!');
    menuPrice = factoryDiv('', '$3.50');
    menuImage = factoryImage(energyDrinkImg, 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const orangeDrink = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = factoryDiv('menuList');
    menuName = factoryDiv('', 'orange Drink');
    menuDescription = factoryDiv('', 'Designed to quench your thirst,100% natural also! ');
    menuPrice = factoryDiv('', '$3.00');
    menuImage = factoryImage(orangeDrinkImg, 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const iceCream = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = factoryDiv('menuList');
    menuName = factoryDiv('', 'Ice cream');
    menuDescription = factoryDiv('', 'Need to run an errand and distract your kids?Buy them Hives ice cream!');
    menuPrice = factoryDiv('', '$0.99');
    menuImage = factoryImage(iceCreamImg, 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const angryBurger = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = factoryDiv('menuList');
    menuName = factoryDiv('', 'Angry Burger');
    menuDescription = factoryDiv('', 'Super mean burger,every bite changes your mood');
    menuPrice = factoryDiv('', '$7.99');
    menuImage = factoryImage(angryBurgerImg, 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const happyBurger = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = factoryDiv('menuList');
    menuName = factoryDiv('', 'Happy Burger');
    menuDescription = factoryDiv('', 'Having a bad day?,This would make you happier just a little bit');
    menuPrice = factoryDiv('', '$7.99');
    menuImage = factoryImage(happyBurgerImg, 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const fries = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = factoryDiv('menuList');
    menuName = factoryDiv('', 'Fries');
    menuDescription = factoryDiv('', 'Craving for a crunchy meal,This is the perfect deal.');
    menuPrice = factoryDiv('', '$10.00');
    menuImage = factoryImage(friesImg, 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const fruitSalad = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = factoryDiv('menuList');
    menuName = factoryDiv('', 'Friut Salad');
    menuDescription = factoryDiv('', 'All natural,packed with enormous amount of vitamins.');
    menuPrice = factoryDiv('', '$9.99');
    menuImage = factoryImage(fruitSaladImg, 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const rice = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = factoryDiv('menuList');
    menuName = factoryDiv('', 'Rice');
    menuDescription = factoryDiv('', 'Our most ordered food.Its no secret this would fill your tummy!');
    menuPrice = factoryDiv('', '$6.99');
    menuImage = factoryImage(riceImg, 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const spaghetti = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = factoryDiv('menuList');
    menuName = factoryDiv('', 'Spaghetti');
    menuDescription = factoryDiv('', 'A spicy meal,very yummy,very tasty.');
    menuPrice = factoryDiv('', '$8.00');
    menuImage = factoryImage(spaghettiImg, 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()
const bread = (function (menuList, menuName, menuDescription, menuPrice, menuImage) {
    menuList = factoryDiv('menuList');
    menuName = factoryDiv('', 'Bread');
    menuDescription = factoryDiv('', 'A loaf of bread,soft and tender,best taken with your favourite spread');
    menuPrice = factoryDiv('', '$4.00');
    menuImage = factoryImage(breadImg, 'image of cocacola');
    appendChildren(menuList, menuName, menuDescription, menuPrice, menuImage)
    return menuList
})()

export const menuSection = (function(){
    const menu = factoryDiv('menu');
    const menuDiv = factoryDiv('','Menu');
    const food = factoryDiv('beverages');
    const menuSection1 = factoryDiv('menuSection','Beverages');
    menu.appendChild(menuDiv);
    menu.appendChild(food);
    food.appendChild(menuSection1);
    //append individual food section
    food.appendChild(superCoke);
    food.appendChild(coffee)
    food.appendChild(energyDrink)
    food.appendChild(orangeDrink)
    const menuSection2 = factoryDiv('menuSection', 'Sides');
    food.appendChild(menuSection2)
    food.appendChild(iceCream)
    food.appendChild(angryBurger)
    food.appendChild(happyBurger)
    food.appendChild(fruitSalad)
    const menuSection3 = factoryDiv('menuSection', 'Main');
    food.appendChild(menuSection3)
    food.appendChild(fries)
    food.appendChild(rice)
    food.appendChild(spaghetti)
    food.appendChild(bread)

    return menu
})()
function appendChildren(menuList,menuName,menuDescription,menuPrice,menuImage){
    menuList.appendChild(menuName);
    menuList.appendChild(menuDescription);
    menuList.appendChild(menuPrice);
    menuList.appendChild(menuImage);
}
