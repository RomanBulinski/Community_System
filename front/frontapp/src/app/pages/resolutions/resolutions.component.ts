import { Component, OnInit } from '@angular/core';
import {Owner} from "../../common/owner";

@Component({
  selector: 'app-resolutions',
  templateUrl: './resolutions.component.html',
  styleUrls: ['./resolutions.component.scss']
})
export class ResolutionsComponent implements OnInit {

  resolutions: Resolution[];

  constructor() { }

  ngOnInit() {
  }

}
