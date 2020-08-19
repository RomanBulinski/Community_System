import {Component, Input, OnInit} from '@angular/core';
import {OwnerService} from '../../services/owner.service';
import {OwnerDTO} from "../../common/OwnerDTO";


@Component({
  selector: 'app-owner-modify',
  templateUrl: './owner-modify.component.html',
  styleUrls: ['./owner-modify.component.scss']
})
export class OwnerModifyComponent implements OnInit {

  // odbieram ownera z komponeneu rodzica
  @Input() owner: OwnerDTO;

  constructor(private ownerService: OwnerService) { }

  ngOnInit(): void {
  }

  modifyOwner(): void {
    this.ownerService.modifyOwner(this.owner)
      .subscribe( data => {
        alert('OwnerDTO modifeid successfully.');
      });
    location.assign('/owners_action');
  }

  // eksportAndChangeURL() {
  //   this.exportContainer.emit(this.showPanel);
  //   location.assign('/owners_action');
  // }

}
