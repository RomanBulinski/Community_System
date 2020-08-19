import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from "@angular/router";
import {PropertyService} from "../../services/property.service";
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {PropertyDTO} from "../../common/PropertyDTO";

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})

export class PropertiesComponent implements OnInit {

  properties: PropertyDTO[];
  displayedColumns: string[] = ['id', 'ownerid', 'type', 'symbol', 'area', 'level', 'participation'];
  dataSource: MatTableDataSource<PropertyDTO>;
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

