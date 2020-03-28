import { Component, OnInit } from '@angular/core';
import {Owner} from "../../common/owner";
import {OwnerService} from "../../services/owner.service";

@Component({
  selector: 'app-owner-modify',
  templateUrl: './owner-modify.component.html',
  styleUrls: ['./owner-modify.component.scss']
})
export class OwnerModifyComponent implements OnInit {

  owner: Owner = new Owner();

  constructor(private ownerService: OwnerService) { }

  ngOnInit(): void {
  }

  modifyOwner(): void {
    this.ownerService.modifyOwner(this.owner)
      .subscribe( data => {
        alert('Owner modifeid successfully.');
      });
    // this.eksportAndChangeURL();
  }

  // eksportAndChangeURL() {
  //   this.exportContainer.emit(this.showPanel);
  //   location.assign('/owners_action');
  // }

}
