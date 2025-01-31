'use strict';
import Human from "./Human.js";

class Apartment {
    residents = [];

    addOwner (human) {
        if(human instanceof Human) {
         this.residents.push(human);
        }
        else {
            console.log('You can only add instances of a class Human');
        }

    }
}


export default Apartment;