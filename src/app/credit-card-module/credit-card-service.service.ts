import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreditCard } from 'src/app/creditcard.type';


@Injectable({
  providedIn: 'root'
})
export class CreditCardServiceService {
url="http://localhost:3000/credit_cards"

  constructor(private http:HttpClient) { }

  getCreditCards() : Observable<CreditCard[]>{
    return this.http.get<CreditCard[]>(this.url);
  }
}
