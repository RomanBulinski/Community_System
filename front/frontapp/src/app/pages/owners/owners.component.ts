import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Owner} from '../../common/owner';
import {OwnerService} from '../../services/owner.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {

  owners: Owner[];
  isOwnerAddPanelVisible = false;
  isOwnerModifyPanelVisible = false;
  indexOwnerForHide = -100;
  positionIndeks = -100;

  constructor(private router: Router, private ownerService: OwnerService ) { }

  ngOnInit() {
    this.ownerService.getOwners()
      .subscribe( data => {
        this.owners = data;
      });
  }

  deleteUser(owner: Owner ): void {
    this.ownerService.deleteUser(owner)
      .subscribe( data => {
        this.owners = this.owners.filter(u => u !== owner);
      });
  }

  showHideAddOwnerPanel() {
    if (this.isOwnerAddPanelVisible === false) {
      this.isOwnerAddPanelVisible = true;
    } else {
      this.isOwnerAddPanelVisible = false;
    }
  }

    import(odebranaZmienna) {
    this.isOwnerAddPanelVisible = odebranaZmienna;
    console.log(odebranaZmienna);
  }

  showHideModifyOwnerPanel( i: number) {
    if (this.positionIndeks === i) {
      this.positionIndeks = 1000;
    } else {
      this.positionIndeks = i;
    }
  }

}
