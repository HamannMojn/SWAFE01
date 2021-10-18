import { Component, Input, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/creditcard.type';
import { Transaction } from 'src/app/transaction.type';

@Component({
  selector: 'app-transaction-list-item-component',
  templateUrl: './transaction-list-item-component.component.html',
  styleUrls: ['./transaction-list-item-component.component.css']
})
export class TransactionListItemComponentComponent implements OnInit {

  @Input() transaction!: Transaction;
  constructor() { }

  ngOnInit(): void {
  }

}
