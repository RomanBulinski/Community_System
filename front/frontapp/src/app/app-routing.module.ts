import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OwnersComponent} from "./pages/owners/owners.component";

import {OwnerFormComponent} from "./components/owner-form/owner-form.component";
import {ResolutionsComponent} from "./pages/resolutions/resolutions.component";
import { PropertiesComponent } from './pages/properties/properties.component';
import { PollsComponent } from './pages/polls/polls.component';
import {VotingFormComponent} from "./pages/voting-form/voting-form.component";

const routes: Routes = [

  { path: 'owners_action', component: OwnersComponent },
  { path: 'addowner', component: OwnerFormComponent },
  { path: 'resolutions_action', component: ResolutionsComponent },
  { path: 'properties_action', component: PropertiesComponent },
  { path: 'polls_action', component: PollsComponent },
  { path: 'poll_form', component: VotingFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
