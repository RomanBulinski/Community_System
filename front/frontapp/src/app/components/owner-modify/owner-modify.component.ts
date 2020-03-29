import {Component, Input, OnInit} from '@angular/core';
import {Owner} from '../../common/owner';
import {OwnerService} from '../../services/owner.service';

@Component({
  selector: 'app-owner-modify',
  templateUrl: './owner-modify.component.html',
  styleUrls: ['./owner-modify.component.scss']
})
export class OwnerModifyComponent implements OnInit {

  // odbieram ownera z komponeneu rodzica
  @Input() owner: Owner;

  constructor(private ownerService: OwnerService) { }

  ngOnInit(): void {
  }

  modifyOwner(): void {
    this.ownerService.modifyOwner(this.owner)
      .subscribe( data => {
        alert('Owner modifeid successfully.');
      });
    location.assign('/owners_action');
  }

  // eksportAndChangeURL() {
  //   this.exportContainer.emit(this.showPanel);
  //   location.assign('/owners_action');
  // }

}
