import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PollService} from '../../services/poll.service';
import {Poll} from '../../common/Poll';
import {Property} from '../../common/Property';
import {PropertyService} from '../../services/property.service';
import { ActivatedRoute } from '@angular/router';
import {ResolutionService} from '../../services/resolution.service';
import {Resolution} from '../../common/Resolution';

@Component({
  selector: 'app-poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.scss']
})
export class PollFormComponent implements OnInit {

  polls: Poll[];
  properties: Property[];
  resolutionID = '';
  res: Resolution;
  resulutionSymbol = '';
  resulutionTitle = '';
  resulutionYear = '2017';

  co = 'NIE';

  poll: Poll = new Poll();
  // nie = 'NIE';
  // [value]=valueFromToggle;
  // valueFromToggle={valu}

  constructor(private router: Router,
              private pollService: PollService,
              private propertyService: PropertyService,
              private rout: ActivatedRoute,
              private resolutionService: ResolutionService) { }

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

    this.resolutionService.getResolutionByID( this.resolutionID ).subscribe(params => {
      this.resulutionSymbol = params.symbol;
      this.resulutionTitle = params.title;
    });
  }


  onClick( propertyId: number, value: string ) {
    this.createPoll(propertyId, value );
  }

  // metoda do zapisu w BD nowego głosu nad daną uchwałą
  createPoll( propertyId: number, value: string ): void {

    const poll = new Poll();
    // poll.resolutionid = this.resolutionID;
    poll.propertyid = propertyId;
    poll.vote = value;

    this.pollService.createPoll(poll)
      .subscribe( data => {
        // alert('Poll created successfully.');
      });
  }

  setButtonState( propertyId: number ) {
    for ( const poll of this.polls ) {
      const check = poll.propertyid == propertyId && poll.resolutionid == this.resolutionID;
      if ( check) {
            return poll.vote;
          }
        }
    }

}
