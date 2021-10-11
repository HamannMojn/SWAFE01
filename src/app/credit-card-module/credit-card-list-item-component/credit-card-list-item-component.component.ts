import { Component, Input, OnInit } from '@angular/core';
import { CreditCard } from 'src/app/creditcard.type';

@Component({
  selector: 'app-credit-card-list-item-component',
  templateUrl: './credit-card-list-item-component.component.html',
  styleUrls: ['./credit-card-list-item-component.component.css']
})
export class CreditCardListItemComponentComponent implements OnInit {

  @Input() creditcard!: CreditCard;

  constructor() { }

  ngOnInit(): void {
  }

}
