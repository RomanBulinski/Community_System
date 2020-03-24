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
  istniejacaZmienna = false;

  @Output()
  zmiennaEksportujaca = new EventEmitter();

  constructor(private router: Router, private ownerService: OwnerService) {
  }

  createUserAndEmitMessage(): void {
    this.ownerService.createOwner(this.owner)
      .subscribe( data => {
        alert('User created successfully.');
      });
    this.eksport();
  }

  eksport() {
    this.zmiennaEksportujaca.emit(this.istniejacaZmienna);
  }





}
