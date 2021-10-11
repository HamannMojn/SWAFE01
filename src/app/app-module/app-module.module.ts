import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NavigationBarComponentComponent } from './navigation-bar-component/navigation-bar-component.component';
import { CreditCardModuleModule } from 'src/app/credit-card-module/credit-card-module.module';

@NgModule({
  declarations: [HomeComponentComponent, NavigationBarComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationBarComponentComponent,
    HomeComponentComponent
  ]
})
export class AppModuleModule { }
