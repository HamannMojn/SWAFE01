import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreditCardServiceService } from 'src/app/credit-card-module/credit-card-service.service';
import { CreditCard } from 'src/app/creditcard.type';
import { Transaction } from 'src/app/transaction.type';
import { TransactionsService } from '../transactions.service';


@Component({
  selector: 'app-transaction-add-component',
  templateUrl: './transaction-add-component.component.html',
  styleUrls: ['./transaction-add-component.component.css']
})
export class TransactionAddComponentComponent implements OnInit {

  creditCards$!: Observable<CreditCard[]>
  transaction!: Transaction
  creditCard!: CreditCard

  transactionForm = this.formbuilder.group({
    credit_card: [],
    transaction_Amount: ['', [Validators.pattern("^[0-9]*$"), Validators.required]],
    transaction_Currency: ['', Validators.required],
    transaction_Comment: [''],
    transaction_Date: ['', Validators.required]
  })



  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private cardService: CreditCardServiceService,
    private transactionService: TransactionsService) {

  }


  ngOnInit(): void {
    this.creditCards$ = this.cardService.getCreditCards();
    console.log(this.creditCards$)
  }

  onSubmit() {
    if (this.transactionForm.valid) {
      let card_Number = this.transactionForm.get('credit_card')?.value
      this.cardService.getCreditCards().subscribe(res => {
        let cardNumber = res.find(c => c.card_number === card_Number)
        if (cardNumber) {
          this.creditCard = cardNumber

          let transaction: Transaction = {
            credit_card: this.creditCard,
            amount: +this.transactionForm.get('transaction_Amount')?.value,
            comment: this.transactionForm.get('transaction_Comment')?.value,
            currency: this.transactionForm.get('transaction_Currency')?.value,
            date: new Date(this.transactionForm.get('transaction_Date')?.value).getDate(),
          }

          console.log(transaction)

          this.transactionService.postTransaction(transaction).subscribe();
          this.router.navigate(['/'])
        }
      })
    }
    else
      console.log("not valid");
  }


}
