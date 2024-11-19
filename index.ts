// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
const propertyContainer = document.querySelector('.properties')

import { showReviewTotal, populateUser } from './utils'
let isOpen: boolean

// reviews
const reviews: {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
}[]
= [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

// user
const you: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[];
} = {
    firstName: 'Thando',
    lastName: 'Chibi',
    isReturning: true,
    age: 20,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

// properties
const properties : {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        postcode: number;
        country: string;
    };
    contact: string; // email
    isAvailable: boolean;
}[] = [
    {
        image: './images/apartment.jpg',
        title: 'Jozi Retreat',
        price: 50,
        location: {
            firstLine: 'unit 42',
            city: 'Johannesburg',
            postcode: 1745,
            country: 'South Africa'
        },
        contact: 'thabiso@gmail.com',
        isAvailable: true   
    },
    {
        image: './images/cabin.jpg',
        title: 'Creative Cabin',
        price: 45,
        location: {
            firstLine: 'no 14',
            city: 'Mbombela',
            postcode: 1234,
            country: 'South Africa'
        },
        contact: 'monica@yahoo.com',
        isAvailable: false 
    },
    {
    image: './images/tiny-home.jpg',
    title: 'Luxe Tiny Home',
    price: 60,
    location: {
        firstLine: 'unit 50',
        city: 'Cape Town',
        postcode: 87876,
        country: 'South Africa'
    },
    contact: 'john@gmail.com',
    isAvailable: true
}
]

// functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

// add properties
properties.forEach(property => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = property.title;

    const image = document.createElement('img');
    image.setAttribute('src', property.image);

    card.appendChild(image);
    propertyContainer.appendChild(card);
});