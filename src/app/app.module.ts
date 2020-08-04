import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { SalesComponent } from './pages/sales/sales.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SpendsComponent } from './pages/spends/spends.component';
import { InvoiceSampleComponent } from './pages/invoice-sample/invoice-sample.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InvoiceComponent,
    SalesComponent,
    SignupComponent,
    SpendsComponent,
    InvoiceSampleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
