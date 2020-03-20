import { Component, OnInit } from '@angular/core';
import {Property} from '../../common/Property';
import {Router} from '@angular/router';
import {PropertyService} from '../../services/property.service';
import { Poll } from 'src/app/common/Poll';
import { PollService } from 'src/app/services/poll.service';
import {OwnerService} from '../../services/owner.service';
import {Owner} from "../../common/owner";
import {PollOnFront} from "../../common/PollOnFront";

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {

  polls: Poll[];
  owners: Owner[];
  properties: Property[];

  // tworze nowa liste z danymi o glosowaniach w ktorej podmieniono idki z bazy na imiona/nazwy
  // czyli zamiast obiektów Poll przechowuje tam obiekty PollOnFront do prezentowania na froncie
  pollsOnFront: PollOnFront[] = [];;

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
