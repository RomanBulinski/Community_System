import { Component, OnInit, ViewChild } from '@angular/core';
import {Property} from "../../common/Property";
import {Router} from "@angular/router";
import {PropertyService} from "../../services/property.service";
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})

export class PropertiesComponent implements OnInit {

  properties: Property[];
  displayedColumns: string[] = ['id', 'ownerid', 'type', 'symbol', 'area', 'level', 'participation'];
  dataSource: MatTableDataSource<Property>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( private router: Router, private propertyService: PropertyService  ) { }

  ngOnInit() {
    this.propertyService.getProperties()
      .subscribe( data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      });
  }


}

