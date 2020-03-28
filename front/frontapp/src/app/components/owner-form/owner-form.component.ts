import {Component, EventEmitter, Output} from '@angular/core';
import { Router} from '@angular/router';
import {Owner} from '../../common/owner';
import {OwnerService} from '../../services/owner.service';

@Component({
  selector: 'app-owner-form',
  templateUrl: './owner-form.component.html',
  styleUrls: ['./owner-form.component.scss']
})
export class OwnerFormComponent {

  owner: Owner = new Owner();
  showPanel = false;
  //obiekt który mozn aprzekazac do kontneru rodzica
  @Output()
  exportContainer = new EventEmitter();

  constructor(private router: Router, private ownerService: OwnerService) {
  }

  createOwnerAndEmitMessage(): void {
    this.ownerService.createOwner(this.owner)
      .subscribe( data => {
        alert('User created successfully.');
      });
    this.eksportAndChangeURL();
  }

  //eksportuje zmienna do rodzica aby wyłączyć panel i jednoczesnie przeładowuje cała stronę
  //czyli wykonuje dwie akcje aby wyłączyć panel - jedna z nich mozna zlikwidować
  eksportAndChangeURL() {
    this.exportContainer.emit(this.showPanel);
    location.assign('/owners_action');
  }

}
