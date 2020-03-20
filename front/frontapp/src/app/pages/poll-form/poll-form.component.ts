import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PollService} from '../../services/poll.service';
import {Poll} from '../../common/Poll';
import {Property} from '../../common/Property';
import {PropertyService} from '../../services/property.service';

@Component({
  selector: 'app-poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.scss']
})
export class PollFormComponent implements OnInit {

  polls: Poll[];
  properties: Property[];

  constructor(private router: Router,
              private pollService: PollService,
              private propertyService: PropertyService) { }

  ngOnInit() {
    this.pollService.getPolls()
      .subscribe(data => {
        this.polls = data;
      });
    this.propertyService.getProperties()
      .subscribe( data => {
        this.properties = data;
      });
  }
}
