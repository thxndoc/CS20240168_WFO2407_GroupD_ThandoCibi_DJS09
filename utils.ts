import { LoyaltyUser } from './enums'
import { Review } from './interfaces'

const reviewTotalDisplay = document.querySelector('#reviews') as HTMLHeadingElement
const returningUserDisplay = document.querySelector('#returning-user') as HTMLSpanElement
const userNameDisplay = document.querySelector('#user') as HTMLSpanElement

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

export function getTopTwoReviews(reviews: Review[]) : Review[]  {
 const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
 return sortedReviews.slice(0,2)
}