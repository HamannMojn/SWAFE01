import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AppModuleModule } from './app-module/app-module.module';
import { CreditCardModuleModule } from './credit-card-module/credit-card-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { TransactionModuleModule } from './transaction-module/transaction-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppModuleModule,
    BrowserAnimationsModule,
    CreditCardModuleModule,
    TransactionModuleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
