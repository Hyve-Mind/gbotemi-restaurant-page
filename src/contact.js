import { factoryDiv } from "./factory";
import { factoryImage } from "./factory";
import chefImg from '/assets/spongeBob.jpeg'
import customerImg from '/assets/Patrick.jpeg'
import CeoImg from '/assets/mrKrabs.png'
const SpongeBob = (function (contactCardContainer, contactCard, ContactName,contactImage ,contactInfo, contactProfession, contactPhoneNumber, contactEmail) {
    contactCardContainer = factoryDiv('');
    contactCard = factoryDiv('');
    ContactName = factoryDiv('', 'SpongeBob');
    contactImage = factoryImage(chefImg , 'a pic of spongeBob');
    contactInfo = factoryDiv('');
    contactProfession = factoryDiv('', 'Chef');
    contactPhoneNumber = factoryDiv('', '+73-456-01');
    contactEmail = factoryDiv('', 'SpongeBob@milky.io');
    appendChildren(contactCardContainer, contactCard, ContactName,contactImage, contactInfo, contactProfession, contactPhoneNumber, contactEmail);
    return contactCardContainer
})()

const patrick = (function (contactCardContainer, contactCard, ContactName, contactImage, contactInfo, contactProfession, contactPhoneNumber, contactEmail){
    contactCardContainer = factoryDiv('');
    contactCard = factoryDiv('');
    ContactName = factoryDiv('', 'Patrick');
    contactImage = factoryImage(customerImg, 'a pic of patrick star');
    contactInfo = factoryDiv('');
    contactProfession = factoryDiv('', 'customer');
    contactPhoneNumber = factoryDiv('', '+73-472-22');
    contactEmail = factoryDiv('', 'patrickstar@milky.io');
    appendChildren(contactCardContainer, contactCard, ContactName, contactImage, contactInfo, contactProfession, contactPhoneNumber, contactEmail);
    return contactCardContainer
})()

const mrKrabs = (function (contactCardContainer, contactCard, ContactName, contactImage, contactInfo, contactProfession, contactPhoneNumber, contactEmail) {
    contactCardContainer = factoryDiv('');
    contactCard = factoryDiv('');
    ContactName = factoryDiv('', 'Mr Krabs');
    contactImage = factoryImage(CeoImg, 'a pic of mr Krabs');
    contactInfo = factoryDiv('');
    contactProfession = factoryDiv('', 'CEO');
    contactPhoneNumber = factoryDiv('', '+73-271-83');
    contactEmail = factoryDiv('', 'krabbyMula@milky.io');
    appendChildren(contactCardContainer, contactCard, ContactName, contactImage, contactInfo, contactProfession, contactPhoneNumber, contactEmail);
    return contactCardContainer
})()

export const contact = (function(){
    let contactUs = factoryDiv('contactUs');
    let ContactUsText = factoryDiv('','Contact Us');
    let contactsContainer = factoryDiv('contacts');
    contactUs.appendChild(ContactUsText);
    contactUs.appendChild(contactsContainer);
    contactsContainer.appendChild(SpongeBob);
    contactsContainer.appendChild(patrick)
    contactsContainer.appendChild(mrKrabs)
    return contactUs
})()

function appendChildren(contactCardContainer,contactCard,ContactName,contactImage,contactInfo,contactProfession,contactPhoneNumber,contactEmail){
    contactCardContainer.appendChild(contactCard);
    contactCardContainer.appendChild(contactInfo);
    contactCard.appendChild(ContactName);
    contactCard.appendChild(contactImage);
    contactInfo.appendChild(contactProfession);
    contactInfo.appendChild(contactPhoneNumber);
    contactInfo.appendChild(contactEmail);
}