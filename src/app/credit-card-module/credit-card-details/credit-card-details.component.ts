import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CreditCard } from 'src/app/creditcard.type';
import { CreditCardServiceService } from 'src/app/credit-card-module/credit-card-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-credit-card-details',
  templateUrl: './credit-card-details.component.html',
  styleUrls: ['./credit-card-details.component.css']
})
export class CreditCardDetailsComponent implements OnInit {

  creditcard: CreditCard | undefined;

  constructor(
    private route:ActivatedRoute,
    private location: Location,
    private service: CreditCardServiceService
  ){}

  ngOnInit() {
    this.getCreditCard();
  }

  getCreditCard(): void {
    const cardnumber = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getCreditCard(cardnumber).subscribe(card => this.creditcard = card);
    console.log(cardnumber);
    console.log(this.creditcard);
    
  }

  goBack(): void {
    this.location.back();
  }

}
