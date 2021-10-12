import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardAddComponentComponent } from './credit-card-add-component/credit-card-add-component.component';
import { CreditCardDetailsComponent } from './credit-card-details/credit-card-details.component';
import { CreditCardListComponentComponent } from './credit-card-list-component/credit-card-list-component.component';

const routes: Routes = [
    {
        path: '',
        component: CreditCardListComponentComponent
    },
    {
        path: 'card/add',
        component: CreditCardAddComponentComponent
    },
    {
        path: 'card/:id',
        component: CreditCardDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreditCardRouterModule {}