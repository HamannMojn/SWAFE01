import { Component, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { CreditCard } from 'src/app/creditcard.type';
import { CreditCardServiceService } from '../credit-card-service.service';
@Component({
  selector: 'app-credit-card-list-component',
  templateUrl: './credit-card-list-component.component.html',
  styleUrls: ['./credit-card-list-component.component.css']
})
export class CreditCardListComponentComponent implements OnInit, OnDestroy {

  creditcards$: Observable<CreditCard[]> | null = null; 
  
  constructor(private CreditCardService: CreditCardServiceService) {
    
  }

  ngOnInit(): void {
    this.creditcards$ = this.CreditCardService.getCreditCards();
  }

  ngOnDestroy(): void {
    this.creditcards$ = null;
  }
}
