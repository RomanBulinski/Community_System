import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnersComponent } from './pages/owners/owners.component';
import {HttpClientModule} from '@angular/common/http';
import { OwnerService } from './services/owner.service';

import { OwnerFormComponent } from './pages/owner-form/owner-form.component';
import {FormsModule} from "@angular/forms";
import { NavComponent } from './nav/nav.component';
import { ResolutionsComponent } from './pages/resolutions/resolutions.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { PollsComponent } from './pages/polls/polls.component';
import { PollFormComponent } from './pages/poll-form/poll-form.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    AppComponent,
    OwnersComponent,
    OwnerFormComponent,
    NavComponent,
    ResolutionsComponent,
    PropertiesComponent,
    PollsComponent,
    PollFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonToggleModule
  ],
  providers: [
    OwnerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
