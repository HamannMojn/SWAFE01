import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/transaction.type'
import { TransactionsService } from '../transactions.service'
import { CreditCardServiceService } from 'src/app/credit-card-module/credit-card-service.service';
import { CreditCard } from 'src/app/creditcard.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-list-component',
  templateUrl: './transaction-list-component.component.html',
  styleUrls: ['./transaction-list-component.component.css']
})
export class TransactionListComponentComponent implements OnInit {
  constructor(
    private TransactionService: TransactionsService,
    private CreditCardServiceService: CreditCardServiceService,
    private router: Router) { }

  filtered!: Array<Transaction>
  transactionList!: Array<Transaction>
  creditCards!: Array<CreditCard>

  option: number = 1
  filterTransaction() {
    this.filtered = this.transactionList.filter(c => c.credit_card.card_number === Number(this.option))
  }
  addTransaction(){
    this.router.navigate([`transactions/addtransaction`])
  }

  ngOnInit(): void {
    this.TransactionService.getTransactions()
      .subscribe(res => {
        this.filtered = res;
        this.transactionList = res;
      });
    this.CreditCardServiceService.getCreditCards()
      .subscribe(res => {
        this.creditCards = res
      });
  }
}
