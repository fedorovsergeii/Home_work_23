'use strict';
import Apartment from "./Apartment.js";

class House {

    constructor(maxCount) {
        this.maxCount = maxCount;
        this.apartaments = [];
    }

    addApartment (apartment) {
        if(!(apartment instanceof Apartment)) {
            console.log('You can only add instances of a class Apartment');
            return;
        }

        if(this.apartaments.length < this.maxCount) {
            this.apartaments.push(apartment);
        }
        else {
            console.log('Maximum number of apartments exceeded');
        }
    }
}

export default House;