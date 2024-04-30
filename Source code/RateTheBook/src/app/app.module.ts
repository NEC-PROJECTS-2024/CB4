import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NavComponent } from './Components/nav/nav.component';
import { LoginComponent } from './Components/login/login.component';
import { SharedModule } from './Shared.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { RatingsComponent } from './Components/Utils/ratings/ratings.component';
import { HttpClientModule } from '@angular/common/http';
import { PopularComponent } from './Components/popular/popular.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookComponent } from './Components/Utils/book/book.component';




@NgModule({
  declarations: [
    NavComponent,
    LoginComponent,
    DashboardComponent,
    RatingsComponent,
    PopularComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [NavComponent]
})
export class AppModule { }
