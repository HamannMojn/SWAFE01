import { CreditCard } from "./creditcard.type";

export interface Transaction {
    credit_card: CreditCard,
    uid?: string,
    amount: number,
    currency: string,
    comment: string,
    date: number,
}