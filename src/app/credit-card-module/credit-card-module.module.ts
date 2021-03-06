import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreditCardAddComponentComponent } from './credit-card-add-component/credit-card-add-component.component';
import { CreditCardListComponentComponent } from './credit-card-list-component/credit-card-list-component.component';
import { CreditCardListItemComponentComponent } from './credit-card-list-item-component/credit-card-list-item-component.component';
import { CreditCardRouterModule } from './credit-card-routing.module';
import { CreditCardDetailsComponent } from './credit-card-details/credit-card-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionModuleModule } from '../transaction-module/transaction-module.module';
import { CustomDatePipe } from './custom-date-pipe';



@NgModule({
  declarations: 
  [CreditCardAddComponentComponent,
  CreditCardListComponentComponent,
  CreditCardListItemComponentComponent,
  CreditCardDetailsComponent,
  CustomDatePipe],
  imports: [
    CommonModule,
    CreditCardRouterModule,
    FormsModule,
    TransactionModuleModule,
    ReactiveFormsModule
  ],
  exports: [
    CreditCardAddComponentComponent,
    CreditCardListComponentComponent,
    CreditCardListItemComponentComponent]
})
export class CreditCardModuleModule { }
