import { LoyaltyUser } from './enums'

const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')

export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) : void {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = `${value.toString()} review${makeMultiple(value)} | last reviewed by ${reviewer} ${iconDisplay}`
}

export function populateUser(isReturning : boolean, userName: string ) {
    if (isReturning == true){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

function add( firstValue: number, secondValue: number ) : number {
    return firstValue + secondValue
}

export function makeMultiple(value: number) : string {
    if (value > 1 || value == 0 ) {
        return 's'
    } else return ''
}

export function getTopTwoReviews(reviews: {
    name: string;
    stars: number;
    loyalyuser: LoyaltyUser;
    date: string;
}[]) : {
    name: string;
    stars: number;
    loyalyuser: LoyaltyUser;
    date: string;  
}[]  {
 const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
 return sortedReviews.slice(0,2)
}