import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PropertyService} from '../../services/httpServices/property.service';
import {PollService} from 'src/app/services/httpServices/poll.service';
import {OwnerService} from '../../services/httpServices/owner.service';
import {PollOnFront} from "../../common/PollOnFront";
import {OwnerDTO} from "../../common/OwnerDTO";
import {PollDTO} from "../../common/PollDTO";
import {PropertyDTO} from "../../common/PropertyDTO";

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {

  polls: PollDTO[];
  owners: OwnerDTO[];
  properties: PropertyDTO[];

  // tworze nowa liste z danymi o glosowaniach w ktorej podmieniono idki z bazy na imiona/nazwy
  // czyli zamiast obiektów PollDTO przechowuje tam obiekty PollOnFront do prezentowania na froncie
  pollsOnFront: PollOnFront[] = [];
;

  constructor(private router: Router,
              private pollService: PollService,
              private ownerService: OwnerService,
              private propertyService: PropertyService) {
  }

  ngOnInit() {
    this.pollService.getPolls()
      .subscribe( data => {
        this.polls = data;
      });
    this.propertyService.getProperties()
      .subscribe( data => {
        this.properties = data;
      });
    this.ownerService.getOwners()
      .subscribe( data => {
        this.owners = data;
      });
    this.createPollsForFront();
  }



  createPollsForFront(){
    // for (let i in this.polls){
      this.pollsOnFront.push(new PollOnFront( "aa","bb","cc","+"));
    // }
  }


//   let tempiDsOfPolls: string[] = [];
//   for (let i in this.owners) {
//   if (this.owners[i].list_of_votes != undefined) {
//   let listOwnerPolls = this.owners[i].list_of_votes
//   if (Object.keys(listOwnerPolls) != undefined) {
//   let listOfid = Object.keys(listOwnerPolls)
//   for (i in listOfid) {
//   let idofPoll = listOfid[i]
//   if (idofPoll != undefined && !tempiDsOfPolls.includes(idofPoll)) {
//   tempiDsOfPolls.push(idofPoll)
// return tempiDsOfPolls;








}
