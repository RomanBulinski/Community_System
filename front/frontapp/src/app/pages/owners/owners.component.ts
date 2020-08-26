import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {OwnerService} from '../../services/owner.service';
import {MatDialog} from '@angular/material/dialog';
import {YesNoFormComponent} from "../../components/yes-no-form/yes-no-form.component";
import {OwnerDTO} from "../../common/OwnerDTO";

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {

  owners: OwnerDTO[];
  isOwnerAddPanelVisible = false;
  positionIndeks = -100;

  constructor(private router: Router,
              private ownerService: OwnerService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.ownerService.getOwners()
      .subscribe(data => {
        this.owners = data;
      });
  }

  deleteUser(owner: OwnerDTO): void {
    this.ownerService.deleteUser(owner)
      .subscribe(data => {
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
  }

  showHideModifyOwnerPanel( i: number) {
    if (this.positionIndeks === i) {
      this.positionIndeks = 1000;
    } else {
      this.positionIndeks = i;
    }
  }

  openDialog(owner: OwnerDTO): void {
    const dialogRef = this.dialog.open(YesNoFormComponent, {
      width: '250px',
      data: {name: owner.name, surname: owner.surname},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === true) {
        this.deleteUser(owner);
      }
      ;
    });
  }

}

