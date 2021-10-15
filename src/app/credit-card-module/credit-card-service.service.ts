import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreditCard } from 'src/app/creditcard.type';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreditCardServiceService {
  
  url="http://localhost:3000/credit_cards"

  cards!: CreditCard[];
  card!: CreditCard;

  constructor(private http:HttpClient) { }

  getCreditCards() : Observable<CreditCard[]>{
    return this.http.get<CreditCard[]>(this.url);
  }

  getCreditCard(cardnumber: Number):Observable<CreditCard> {
    return this.getCreditCards()
    .pipe(
      map((cards: any[]) => cards
      .find((card: { card_number: Number; }) =>
      card.card_number == cardnumber)));
  }

  deleteCreditCard(cardnumber: number): Observable<CreditCard> {
    return this.http.delete<CreditCard>(`${this.url}/${cardnumber}`);
  }

  postCreditCard(newCreditCard: CreditCard): Observable<CreditCard> {
    return this.http.post<CreditCard>(`${this.url}`,{
      card_number: newCreditCard.card_number,
      cardholder_name: newCreditCard.cardholder_name,
      csc_code: newCreditCard.csc_code,
      expiration_date_month: newCreditCard.expiration_date_month,
      expiration_date_year: newCreditCard.expiration_date_year,
      issuer: newCreditCard.issuer
    });
  }
}
