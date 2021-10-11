import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NavigationBarComponentComponent } from './navigation-bar-component/navigation-bar-component.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponentComponent, NavigationBarComponentComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavigationBarComponentComponent,
    HomeComponentComponent
  ]
})
export class AppModuleModule { }
