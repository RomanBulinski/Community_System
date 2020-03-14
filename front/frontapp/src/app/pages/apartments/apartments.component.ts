import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Apartment} from "../../common/Apartment";
import {ApartmentService} from "../../services/apartment.service";

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss']
})
export class ApartmentsComponent implements OnInit {

  apartments: Apartment[];

  constructor( private router: Router, private apartmentService: ApartmentService) { }

  ngOnInit() {
    this.apartmentService.getApartments()
      .subscribe( data => {
        this.apartments = data;
      });
  }

}
