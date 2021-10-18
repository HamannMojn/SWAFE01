import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CreditCardServiceService } from 'src/app/credit-card-module/credit-card-service.service';
import { CreditCard } from 'src/app/creditcard.type';
import { Transaction } from 'src/app/transaction.type';
import { Location } from '@angular/common';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transaction-overview-component',
  templateUrl: './transaction-overview-component.component.html',
  styleUrls: ['./transaction-overview-component.component.css']
})
export class TransactionOverviewComponentComponent implements OnInit {

  transaction!: Transaction

  constructor(
    private route: ActivatedRoute,
    private service: TransactionsService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getTransaction();
  }

  getTransaction(){
    let id: string | null = this.route.snapshot.paramMap.get('uid')
    this.service.getTransactions().subscribe(res => {
      let trans = res.find(c => c.uid === id)
      if(trans){
        this.transaction = trans;
        console.log(this.transaction)
      }
    })
  }

  deleteTransaction(transaction: Transaction): void{
    if(transaction.uid){
    this.service.deleteTransaction(transaction.uid).subscribe();
    }
    this.goBack();
  }

  goBack(): void{
    this.location.back();
  }
}
