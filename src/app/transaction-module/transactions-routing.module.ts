import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionAddComponentComponent } from './transaction-add-component/transaction-add-component.component';
import { TransactionListComponentComponent } from './transaction-list-component/transaction-list-component.component';
import { TransactionOverviewComponentComponent } from './transaction-overview-component/transaction-overview-component.component';

const routes: Routes = [
    {
        path: 'transactions',
        component: TransactionListComponentComponent
    },
    {
        path: 'overview',
        component: TransactionOverviewComponentComponent
    },
    {
        path: 'overview/:uid',
        component: TransactionOverviewComponentComponent
    },
    {
        path: 'transactions/addtransaction',
        component: TransactionAddComponentComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TransactionsRoutingModule{}