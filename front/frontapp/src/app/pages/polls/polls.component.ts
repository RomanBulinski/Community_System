import { Component, OnInit } from '@angular/core';
import {Property} from "../../common/Property";
import {Router} from "@angular/router";
import {PropertyService} from "../../services/property.service";
import { Poll } from 'src/app/common/Poll';
import { PollService } from 'src/app/services/poll.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {

  polls: Poll[];
  constructor(private router: Router, private pollService: PollService ) { }

  ngOnInit() {
    this.pollService.getPolls()
      .subscribe( data => {
        this.polls = data;
      });
  }

}
