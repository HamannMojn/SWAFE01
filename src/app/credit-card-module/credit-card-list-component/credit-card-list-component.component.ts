import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from 'src/app/creditcard.type';
import { CreditCardServiceService } from '../credit-card-service.service';
@Component({
  selector: 'app-credit-card-list-component',
  templateUrl: './credit-card-list-component.component.html',
  styleUrls: ['./credit-card-list-component.component.css']
})
export class CreditCardListComponentComponent implements OnInit {

  creditcards$: Observable<CreditCard[]> | null = null; 
  
  constructor(private CreditCardService: CreditCardServiceService) {
    this.creditcards$ = this.CreditCardService.getCreditCards()
  }

  ngOnInit(): void {}

}
