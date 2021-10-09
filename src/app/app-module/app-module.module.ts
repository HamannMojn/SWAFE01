import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponentComponent } from './home-component/home-component.component';
import { NavigationBarComponentComponent } from './navigation-bar-component/navigation-bar-component.component';



@NgModule({
  declarations: [HomeComponentComponent, NavigationBarComponentComponent],
  imports: [
    CommonModule
  ]
})
export class AppModuleModule { }
