// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
import { showReviewTotal, populateUser, getTopTwoReviews } from './utils'
import { Permissions, LoyaltyUser } from './enums'
import { Price, Country } from './types'

const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer')

let isOpen: boolean
let isLoggedIn: boolean
   
// reviews
const reviews: any[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
        description: 'Great hosts, location was a bit further than said'
    },
]

// user
const you = {
    firstName: 'Thando',
    lastName: 'Chibi',
    permissions: Permissions.ADMIN,
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
        country: Country;
    };
    contact: [number, string];
    isAvailable: boolean;
}[] = [
    {
        image: './images/apartment.jpg',
        title: 'Jozi Retreat',
        price: 42,
        location: {
            firstLine: 'unit 42',
            city: 'Johannesburg',
            postcode: 1745,
            country: 'South Africa'
        },
        contact: [+271234567890,'thabiso@gmail.com'],
        isAvailable: true   
    },
    {
        image: './images/cabin.jpg',
        title: 'Creative Cabin',
        price: 30,
        location: {
            firstLine: 'no 14',
            city: 'Mbombela',
            postcode: 1234,
            country: 'South Africa'
        },
        contact: [+271234567890, 'monica@yahoo.com'],
        isAvailable: false 
    },
    {
    image: './images/tiny-home.jpg',
    title: 'Luxe Tiny Home',
    price: 25,
    location: {
        firstLine: 'unit 50',
        city: 'Cape Town',
        postcode: 87876,
        country: 'South Africa'
    },
    contact: [+271234567890, 'john@gmail.com'],
    isAvailable: true
}
]

// functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

let authorityStatus : any

isLoggedIn = true

function showDetails(authorityStatus: boolean | Permissions, element : HTMLDivElement, price: number) {
   if (authorityStatus) {
       const priceDisplay = document.createElement('div')
       priceDisplay.innerHTML = price.toString() + '/night'
       element.appendChild(priceDisplay)
   }
}

// add properties
properties.forEach(property => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = property.title;

    const image = document.createElement('img');
    image.setAttribute('src', property.image);

    card.appendChild(image);
    propertyContainer.appendChild(card);
    showDetails(you.permissions, card, property.price)
});

let count = 0

function addReviews(array: {
    name: string;
    stars: number;
    loyaltyuser: LoyaltyUser;
    date: string;
}[] ) : void {
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button) 
    }
}

button.addEventListener('click', () => addReviews(reviews))

let currentLocation: [string, string, number] = ['Johannesburg', '20:30', 21]
footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}℃`