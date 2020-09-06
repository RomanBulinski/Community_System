import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {OwnerService} from '../../services/httpServices/owner.service';
import {MatDialog} from '@angular/material/dialog';
import {YesNoFormComponent} from "../../components/yes-no-form/yes-no-form.component";
import {OwnerDTO} from "../../common/OwnerDTO";
import {catchError, debounceTime, filter, map, retry, tap} from "rxjs/operators";
import {NotificationService} from "../../services/notification.service";
import {of} from "rxjs";

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit {

  owners: OwnerDTO[];
  ownersA: OwnerDTO[] = []

  isOwnerAddPanelVisible = false;
  positionIndeks = -100;

  constructor(private router: Router,
              private ownerService: OwnerService,
              public dialog: MatDialog,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.getOwners3();
  }

  public getOwners() {
    this.ownerService.getOwners()
      .subscribe(data => {
          this.owners = data;
        },
        error => this.notificationService.error(error));
  }

  // const apiData = ajax('/api/data').pipe(
  //   retry(3), // Retry up to 3 times before failing
  //   map(res => {
  //     if (!res.response) {
  //       throw new Error('Value expected!');
  //     }
  //     return res.response;
  //   }),
  //   catchError(err => of([]))
  // );


//   return items.filter(item => {
//   if (item && item[fieldName]) {
//   return item[fieldName].toLowerCase().includes(searchText);
// }
// return false;
  private own: OwnerDTO = {id: 1, name: "BOŻENA", surname: "ŻMURKO", email: " "}

  transform(items: any[], term: any[]): any {
    if (!term)
      return items;
    return items.filter(item => item.prefix.indexOf(term) > -1);
  }


  public getOwners3() {
    console.log(this.own.name)
    this.ownerService.getOwners().pipe(
      tap(owners => owners.forEach(owner => console.log(owner.name.length)))
    )
      .subscribe(owners => {
          this.owners = owners.filter(owner => owner.name === "BOŻENA")
        },
        error => this.notificationService.error(error))
  }


  public xxx() {
    const squareOdd = of(1, 2, 3, 4, 5)
      .pipe(
        filter(n => n % 2 !== 0),
        map(n => n * n)
      ).subscribe(x => console.log(x));
  }


  public getOwners2(): void {
    this.ownerService.getOwners().pipe(
      debounceTime(500),
      filter((owner: OwnerDTO) => owner.name.toString() !== "BOŻENA"))
      .subscribe(owners => {
          console.log(owners[0])
        },
        error => this.notificationService.error(error))
  }


  public deleteUser(owner: OwnerDTO): void {
    this.ownerService.deleteUser(owner)
      .subscribe(data => {
        this.owners = this.owners.filter(u => u !== owner);
      });
  }

  public showHideAddOwnerPanel(): void {
    if (this.isOwnerAddPanelVisible === false) {
      this.isOwnerAddPanelVisible = true;
    } else {
      this.isOwnerAddPanelVisible = false;
    }
  }

  public import(odebranaZmienna): void {
    this.isOwnerAddPanelVisible = odebranaZmienna;
  }

  public showHideModifyOwnerPanel(i: number): void {
    if (this.positionIndeks === i) {
      this.positionIndeks = 1000;
    } else {
      this.positionIndeks = i;
    }
  }

  private openDialog(owner: OwnerDTO): void {
    const dialogRef = this.dialog.open(YesNoFormComponent, {
      width: '250px',
      data: {name: owner.name, surname: owner.surname},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result === true) {
        this.deleteUser(owner);
      }
    });
  }

}

