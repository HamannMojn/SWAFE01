import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreditCard } from 'src/app/creditcard.type';
import { CreditCardServiceService } from '../credit-card-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-card-add-component',
  templateUrl: './credit-card-add-component.component.html',
  styleUrls: ['./credit-card-add-component.component.css']
})
export class CreditCardAddComponentComponent implements OnInit {

  creditCardForm = this.formbuilder.group({
    card_number: ['', [Validators.pattern("^[0-9]*$"), Validators.minLength(7), Validators.maxLength(16), Validators.required]],
    cardholder_name: ['', Validators.required],
    csc_code: ['', [Validators.pattern("^[0-9]*$"), Validators.minLength(3), Validators.maxLength(3), Validators.required]],
    expiration_date_month: ['', [Validators.min(1), Validators.max(12), Validators.required]],
    expiration_date_year: ['', [Validators.min(1), Validators.max(31), Validators.required]],
    issuer: ['']
  });

  constructor(private formbuilder: FormBuilder,
    private cardService: CreditCardServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.creditCardForm.valid){
      let tempCard: CreditCard = {
        card_number: +this.creditCardForm.get('card_number')?.value,
        cardholder_name: this.creditCardForm.get('cardholder_name')?.value,
        csc_code: +this.creditCardForm.get('csc_code')?.value,
        expiration_date_month: +this.creditCardForm.get('expiration_date_month')?.value,
        expiration_date_year: +this.creditCardForm.get('expiration_date_year')?.value,
        issuer: this.creditCardForm.get('issuer')?.value
      }
      console.log(tempCard);

      this.cardService.postCreditCard(tempCard).subscribe();
      this.router.navigate(['/']);
    }
    else
    console.log("not valid");
  }

}
