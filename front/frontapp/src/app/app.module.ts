import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnersComponent } from './pages/owners/owners.component';
import {HttpClientModule} from "@angular/common/http";
import { OwnerService } from './services/owner.service';
import { ApartmentsComponent } from './pages/apartments/apartments.component';
import {ApartmentService} from "./services/apartment.service";
import { OwnerFormComponent } from './pages/owner-form/owner-form.component';
import {FormsModule} from "@angular/forms";
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    OwnersComponent,
    ApartmentsComponent,
    OwnerFormComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    OwnerService,
    ApartmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
