'use strict';
import Human from "./Human.js";
import Apartment from "./Apartment.js";
import House from "./House.js";
/*
#1

a) Створити клас Людина.
  Властивості:
    імʼя;
    стать.
  Методи:
    конструктор, який приймає два параметри: імʼя та стать.

b) Створити клас Квартира.
  Властивості:
    конструктор не потрібен;
    масив жителів, який при створенні пустий.
  Методи:
    додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

c) Створити клас Будинок.

  Властивості:
    масив квартир, який при створенні пустий;
    максимальна кількість квартир.
  Методи:
    конструктор, який приймає один параметр: максимальну кількість квартир;
    додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати
     максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.

d) В якості демонстраціїї створити:
  декілька екземплярів класу Людина;
  декілька екземплярів класу Квартира;
  додадити екземпляри класу Людина до екземплярів класу Квартира;
  екземпляр класу Будинок;
  додадити екземпляри класу Квартира до екземплярів класу Будинок.
*/


const humanJohn = new Human('John','male');
const humanMary = new Human('Mary','female');
const humanJack = new Human('Jack','male');
const humanAnna = new Human('Anna','female');
const humanNick = new Human('Nick','male');
const humanSara = new Human('Sara','female');


const apartment1 = new Apartment();
apartment1.addOwner(humanJohn);
apartment1.addOwner(humanMary);
apartment1.addOwner('Lussi');

const apartment2 = new Apartment();
apartment2.addOwner(humanJack);
apartment2.addOwner(humanAnna);

const apartment3 = new Apartment();
apartment3.addOwner(humanNick);
apartment3.addOwner(humanSara);


const myHouse = new House(2);
myHouse.addApartment(apartment1);
myHouse.addApartment(apartment2);
myHouse.addApartment('apartment1');
myHouse.addApartment(apartment3);
console.log(myHouse.apartaments);
