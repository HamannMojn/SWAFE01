import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionOverviewComponentComponent } from './transaction-overview-component/transaction-overview-component.component';
import { TransactionListComponentComponent } from './transaction-list-component/transaction-list-component.component';
import { TransactionListItemComponentComponent } from './transaction-list-item-component/transaction-list-item-component.component';
import { TransactionAddComponentComponent } from './transaction-add-component/transaction-add-component.component';
import { TransactionsService } from './transactions.service';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreditCardModuleModule } from '../credit-card-module/credit-card-module.module';



@NgModule({
  declarations: [TransactionOverviewComponentComponent, TransactionListComponentComponent, TransactionListItemComponentComponent, TransactionAddComponentComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TransactionsService
  ]
})
export class TransactionModuleModule { }
