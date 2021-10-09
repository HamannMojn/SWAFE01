import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardAddComponentComponent } from './credit-card-add-component/credit-card-add-component.component';
import { CreditCardListComponentComponent } from './credit-card-list-component/credit-card-list-component.component';
import { CreditCardListItemComponentComponent } from './credit-card-list-item-component/credit-card-list-item-component.component';



@NgModule({
  declarations: [CreditCardAddComponentComponent, CreditCardListComponentComponent, CreditCardListItemComponentComponent],
  imports: [
    CommonModule
  ]
})
export class CreditCardModuleModule { }
