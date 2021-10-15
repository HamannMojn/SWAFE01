import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CreditCard } from 'src/app/creditcard.type';
import { CreditCardServiceService } from 'src/app/credit-card-module/credit-card-service.service';
import { Location } from '@angular/common';
import { TransactionsService } from 'src/app/transaction-module/transactions.service';
import { Transaction } from 'src/app/transaction.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.css']
})
export class CreditCardDetailsComponent implements OnInit {

  creditcard!: CreditCard;
  transactions$!: Transaction[];


  constructor(
    private route:ActivatedRoute,
    private location: Location,
    private service: CreditCardServiceService,
    private transactionService: TransactionsService
  ){
  }

  ngOnInit() {
    this.getCreditCard();
  }

  getCreditCard(): void {
    const cardnumber = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getCreditCards().subscribe(res => {
      var list = res;
      var card = list.find(c => c.card_number === cardnumber);
      if(card){
        this.creditcard = card;
        console.log(this.creditcard);
        this.getTransactions(card);
      }
    });
  }

  getTransactions(card: CreditCard) {
    this.transactionService.getTransactions().subscribe(res => {
      var list = res
      var transactions = list.filter(c => c.credit_card.card_number === card.card_number)
      if(transactions){
        this.transactions$ = transactions
        console.log(this.transactions$)
      }
    })
  }

  goBack(): void {
    this.location.back();
  }

  deleteCard(card: CreditCard): void{
    this.service.deleteCreditCard(card.card_number).subscribe();
    console.log(card)
    this.location.back();
  }

}
