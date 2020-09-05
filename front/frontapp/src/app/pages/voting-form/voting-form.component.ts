import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PollService} from '../../services/httpServices/poll.service';
import {PropertyService} from '../../services/httpServices/property.service';
import {ActivatedRoute} from '@angular/router';
import {ResolutionService} from '../../services/httpServices/resolution.service';
import {PollDTO} from "../../common/PollDTO";
import {PropertyDTO} from "../../common/PropertyDTO";
import {ResolutionDTO} from "../../common/ResolutionDTO";

@Component({
  selector: 'app-poll-form',
  templateUrl: './voting-form.component.html',
  styleUrls: ['./voting-form.component.scss']
})
export class VotingFormComponent implements OnInit {

  polls: PollDTO[];
  properties: PropertyDTO[];
  resolutionID = '';
  res: ResolutionDTO;
  resulutionSymbol = '';
  resulutionTitle = '';
  resulutionYear = '2017';

  co = 'NIE';

  poll: PollDTO = new PollDTO();
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

    const poll = new PollDTO();
    poll.resolutionid = this.resolutionID;
    poll.propertyid = propertyId;
    poll.vote = value;

    this.pollService.createPoll(poll)
      .subscribe( data => {
        // alert('PollDTO created successfully.');
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
