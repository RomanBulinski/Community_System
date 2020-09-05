import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ResolutionService} from "../../services/httpServices/resolution.service";
import {ResolutionDTO} from "../../common/ResolutionDTO";


@Component({
  selector: 'app-resolutions',
  templateUrl: './resolutions.component.html',
  styleUrls: ['./resolutions.component.scss']
})
export class ResolutionsComponent implements OnInit {

  resolutions: ResolutionDTO[];
  resolutionID: string;
  location: any;

  constructor(private router: Router, private resolutionService: ResolutionService) {
  }

  ngOnInit() {
    this.resolutionService.getResolutions()
      .subscribe(data => {
        this.resolutions = data;
      });
  }

  goForVote(resolution: ResolutionDTO) {
    location.assign('/poll_form?resolutionID=' + resolution.id);
  }


  // deleteUser(owner: OwnerDTO): void {
  //   this.ownerService.deleteUser(owner)
  //     .subscribe(data => {
  //       this.owners = this.owners.filter(u => u !== owner);
  //     })
  // }

}
