import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OwnersComponent} from './pages/owners/owners.component';
import {HttpClientModule} from '@angular/common/http';
import {OwnerService} from './services/owner.service';

import {OwnerFormComponent} from './components/owner-form/owner-form.component';
import {FormsModule} from '@angular/forms';
import {NavComponent} from './nav/nav.component';
import {ResolutionsComponent} from './pages/resolutions/resolutions.component';
import {PropertiesComponent} from './pages/properties/properties.component';
import {PollsComponent} from './pages/polls/polls.component';
import {VotingFormComponent} from './pages/voting-form/voting-form.component';
// import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwnerModifyComponent } from './components/owner-modify/owner-modify.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";

@NgModule({
  declarations: [
    AppComponent,
    OwnersComponent,
    OwnerFormComponent,
    NavComponent,
    ResolutionsComponent,
    PropertiesComponent,
    PollsComponent,
    VotingFormComponent,
    OwnerModifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [
    OwnerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
