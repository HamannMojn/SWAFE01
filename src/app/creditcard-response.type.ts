import { CreditCard } from './creditcard.type';
import { errorcode } from './errorcode.type';
export interface CreditCardResponse{
    creditcards?: Array<CreditCard>
    error?: errorcode
}
