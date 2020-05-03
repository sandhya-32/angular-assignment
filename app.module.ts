import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';




import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductsComponent } from './add-products/add-products.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { SampleComponent } from './sample/sample.component';
import { HomeComponent } from './home/home.component';
import { ProdutsComponent } from './produts/produts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DirectivesComponent,
    AddProductsComponent,
    RegisterComponent,
    HeaderComponent,
    PageNotFoundComponent,
    SampleComponent,
    HomeComponent,
    ProdutsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
