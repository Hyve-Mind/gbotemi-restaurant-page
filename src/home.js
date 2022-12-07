import { factoryDiv, factoryImage } from "./factory";
import theRestaurant from "/assets/Therestaurant.jpeg"
export const homePage = (function(){
    const home = factoryDiv('home');
    const restaurantImage = factoryImage(theRestaurant,'image of a restaurant');
    const aboutDiv = factoryDiv('about');
    const remarks = factoryDiv("", "Hive's Restaurant is the best in the whole milky way,whenever you come visiting and you need a place to taste the best food, you know where to come!");
    const remarksAuthor = factoryDiv('','Patrick Star');
    const openingHoursContainer = factoryDiv("openingHoursContainer");
    const hoursText = factoryDiv('','Hours');
    const openingHours = factoryDiv('openingHours');
    const openingHoursDiv1 = factoryDiv('','Sunday: 8am - 8pm');
    const openingHoursDiv2 = factoryDiv('', 'Monday: 6am - 6pm');
    const openingHoursDiv3 = factoryDiv('', 'Tuesday: 6am - 6pm');
    const openingHoursDiv4 = factoryDiv('', 'Wednesday:6am - 6pm');
    const openingHoursDiv5 = factoryDiv('', 'Thursday:6am - 10pm');
    const openingHoursDiv6 = factoryDiv('', 'Friday: 6am - 10pm');
    const openingHoursDiv7 = factoryDiv('', 'Saturday: 8am - 10pm');
    const location = factoryDiv('location');
    const locationDiv = factoryDiv('','Location');
    const address = factoryDiv('','edinburg,planet v13k,northern hemisphere,milky way.');
    // append the created elements to the parent element
    home.appendChild(restaurantImage);
    home.appendChild(aboutDiv);
    home.appendChild(openingHoursContainer);
    home.appendChild(location);
    aboutDiv.appendChild(remarks);
    aboutDiv.appendChild(remarksAuthor);
    openingHoursContainer.appendChild(hoursText);
    openingHoursContainer.appendChild(openingHours);
    openingHours.appendChild(openingHoursDiv1);
    openingHours.appendChild(openingHoursDiv2);
    openingHours.appendChild(openingHoursDiv3);
    openingHours.appendChild(openingHoursDiv4);
    openingHours.appendChild(openingHoursDiv5);
    openingHours.appendChild(openingHoursDiv6);
    openingHours.appendChild(openingHoursDiv7);
    location.appendChild(locationDiv);
    location.appendChild(address);
    return home;
})()


