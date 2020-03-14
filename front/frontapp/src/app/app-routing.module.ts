import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OwnersComponent} from "./pages/owners/owners.component";
import {ApartmentsComponent} from "./pages/apartments/apartments.component";
import {OwnerFormComponent} from "./pages/owner-form/owner-form.component";


const routes: Routes = [
  { path: 'apartments_action', component: ApartmentsComponent },
  { path: 'owners_action', component: OwnersComponent },
  { path: 'addowner', component: OwnerFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
