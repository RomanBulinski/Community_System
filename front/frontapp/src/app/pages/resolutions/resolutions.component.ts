import {Component, OnInit} from '@angular/core';
import {Resolution} from "../../common/Resolution";
import {Router} from "@angular/router";
import {ResolutionService} from "../../services/resolution.service";
import {Owner} from "../../common/owner";

@Component({
  selector: 'app-resolutions',
  templateUrl: './resolutions.component.html',
  styleUrls: ['./resolutions.component.scss']
})
export class ResolutionsComponent implements OnInit {

  resolutions: Resolution[];

  constructor(private router: Router, private resolutionService: ResolutionService) {
  }

  ngOnInit() {
    this.resolutionService.getResolutions()
      .subscribe(data => {
        this.resolutions = data;
      });
  }

  // deleteUser(owner: Owner): void {
  //   this.ownerService.deleteUser(owner)
  //     .subscribe(data => {
  //       this.owners = this.owners.filter(u => u !== owner);
  //     })
  // }

}