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

  cards: CreditCard[] | undefined;
  card: CreditCard | undefined;

  constructor(private http:HttpClient) { }

  getCreditCards() : Observable<CreditCard[]>{
    return this.http.get<CreditCard[]>(this.url);
  }

  getCreditCard(cardnumber: Number):Observable<CreditCard> {
    return this.getCreditCards()
    .pipe(
      map((cards: any[]) => cards
      .find((card: { card_number: Number; }) => card.card_number == cardnumber)));
  }
}
