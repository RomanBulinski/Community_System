import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PollService} from '../../services/poll.service';
import {Poll} from '../../common/Poll';
import {Property} from '../../common/Property';
import {PropertyService} from '../../services/property.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.scss']
})
export class PollFormComponent implements OnInit {

  polls: Poll[];
  properties: Property[];
  resolutionID = '';

  resulutionSymbol = '5-2017';
  resulutionTitle = 'Absolutorium dla zrzadu';
  resulutionYear = '2017';

  poll: Poll = new Poll();
  // nie = 'NIE';
  // [value]=valueFromToggle;
  // valueFromToggle={valu}

  constructor(private router: Router,
              private pollService: PollService,
              private propertyService: PropertyService,
              private rout: ActivatedRoute) { }

  ngOnInit() {
    this.pollService.getPolls()
      .subscribe(data => {
        this.polls = data;
      });
    this.propertyService.getProperties()
      .subscribe( data => {
        this.properties = data;
      });

    this.rout.queryParams.subscribe(params => {
      this.resolutionID = params.resolutionID;
    });
  }

  onClick( propertyId: string, value: string ) {
    this.createPoll(propertyId, value );
  }

  createPoll( propertyId: string, value: string ): void {

    const poll = new Poll();
    poll.resolutionid = this.resolutionID;
    poll.propertyid = propertyId;
    poll.vote = value;

    this.pollService.createPoll(poll)
      .subscribe( data => {
        // alert('Poll created successfully.');
      });
  }
}
