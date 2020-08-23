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
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwnerModifyComponent } from './components/owner-modify/owner-modify.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { YesNoFormComponent } from './components/yes-no-form/yes-no-form.component';
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from '@angular//material/input';
import {AngularFileUploaderModule} from "angular-file-uploader";
import {DocumentsComponent} from './pages/documents/documents.component';



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
    OwnerModifyComponent,
    YesNoFormComponent,
    DocumentsComponent
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
    MatSortModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    AngularFileUploaderModule,
  ],
  exports: [
    MatInputModule,
  ],
  providers: [
    OwnerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
