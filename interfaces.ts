import { LoyaltyUser } from "./enums";

export interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}