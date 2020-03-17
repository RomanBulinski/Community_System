import { Component, OnInit } from '@angular/core';

import {Property} from "../../common/Property";
import {Router} from "@angular/router";

import {PropertyService} from "../../services/property.service";

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {

  properties: Property[];
  constructor( private router: Router, private propertyService: PropertyService  ) { }

  ngOnInit() {
    this.propertyService.getProperties()
      .subscribe( data => {
        this.properties = data;
      });
  }

}
