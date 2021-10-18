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
  url = "http://localhost:3000/transactions"


  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.url);
  }

  postTransaction(transaction: Transaction): Observable<Transaction[]> {
    return this.http.post<Transaction[]>(this.url, {
      credit_card: transaction.credit_card,
      amount: transaction.amount,
      comment: transaction.comment,
      date: transaction.date,
      currency: transaction.currency
    })
  }

  deleteTransaction(transaction_uid: string): Observable<Transaction[]>{
    return this.http.delete<Transaction[]>(`${this.url}/${transaction_uid}`)
  }

  generateTransaction(): Observable<Transaction[]>{
    return this.http.get<Transaction[]>(`${this.url}/generate`)
  }
}
