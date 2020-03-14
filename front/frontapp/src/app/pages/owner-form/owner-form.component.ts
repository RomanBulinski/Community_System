import { Component} from '@angular/core';
import { Router} from "@angular/router";
import {Owner} from "../../common/owner";
import {OwnerService} from "../../services/owner.service";

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.scss']
})
export class OwnerFormComponent{

  // owner: Owner;

  // constructor(
  //   private route: ActivatedRoute,
  //   private router: Router,
  //   private ownerService: OwnerService) {
  //   this.owner = new Owner(13,'aaa','aaaaaaaa');
  // }

  // onSubmit() {
  //   this.ownerService.save(this.owner).subscribe(() => this.gotoOwnerList());
  // }
  //
  // gotoOwnerList() {
  //   this.router.navigate(['/owners']);
  // }

  owner: Owner = new Owner();

  constructor(private router: Router, private ownerService: OwnerService) {

  }

  createUser(): void {
    this.ownerService.createOwner(this.owner)
      .subscribe( data => {
        alert("User created successfully.");
      });

  };





}
