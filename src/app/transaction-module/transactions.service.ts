import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../transaction.type';
import { map } from 'rxjs/operators';
import { CreditCard } from '../creditcard.type';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  url="http://localhost:3000/transactions"

  transactions!: Transaction[];
  transaction!: Transaction;
  
  constructor(private http:HttpClient) { }

  getTransactions() : Observable<Transaction[]>{
    return this.http.get<Transaction[]>(this.url);
  }
}
