import { LoyaltyUser } from './enums'

const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')

export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) : void {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = `review total ${value.toString()} | last reviewed by ${reviewer} ${iconDisplay}`
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

export function makeMultiple(value: number) {
    if (value > 1) {
        return 's'
    } 
}