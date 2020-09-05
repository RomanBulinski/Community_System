import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {PropertyService} from "../../services/httpServices/property.service";
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {PropertyDTO} from "../../common/PropertyDTO";
import {Observable, of} from "rxjs";
import {NotificationService} from "../../services/notification.service";

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

  private results: Observable<PropertyDTO[]>;

  constructor(private router: Router,
              private propertyService: PropertyService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {

    // this.propertyService.getProperties()
    //   .subscribe( data => {
    //     this.dataSource = new MatTableDataSource(data);
    //     this.dataSource.sort = this.sort;
    //   });

    this.propertyService.getProperties().subscribe(async data => {
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
      },
      err => this.notificationService.error(err),);

    //odbieram observable i na nim pracuje w html
    this.results = this.propertyService.getProperties();

  }





}

