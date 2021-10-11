import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CreditCard } from 'src/app/creditcard.type';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.css']
})
export class CreditCardDetailsComponent implements OnInit {

  creditcard$: Observable<CreditCard> | null = null;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {}

}
