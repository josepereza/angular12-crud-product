import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { AdminModule } from '../admin/admin.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    AdminModule,
    RouterModule,
    HttpClientModule
  ]
})
export class MainModule { }
