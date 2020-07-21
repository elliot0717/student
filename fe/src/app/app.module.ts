
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TestComponent } from './components/test/test.component';
import { AdminAddComponent } from './components/admin-add/admin-add.component';
import { AdminLoginComponent } from './components/AdminLogin/AdminLogin.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UniversitiesComponent } from './universities/universities.component';
import { MedicineComponent } from './medicine/medicine.component';
import { LawComponent } from './law/law.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { SportsComponent } from './sports/sports.component';
import { CommerceComponent } from './commerce/commerce.component';
import { FarmingComponent } from './farming/farming.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TestComponent,
    AdminAddComponent,
    AdminLoginComponent,
    LoginComponent,
    AdminComponent,
    UniversitiesComponent,
    MedicineComponent,
    LawComponent,
    EngineeringComponent,
    SportsComponent,
    CommerceComponent,
    FarmingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
