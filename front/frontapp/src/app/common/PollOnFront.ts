
// klasa dla obiektu który bedzie zbierał dane z klasy Poll
// przerabial idki na nazwy
// i reprezentował je na froncie
// np "resolutionid" na "title"

export class PollOnFront {
  id: number;
  resolution: string;
  property: string;
  ownerSurname: string;
  vote: string;

  constructor(resolution: string, property: string, ownerSurname: string, vote: string ) {
    this.resolution = resolution;
    this.property = property;
    this.ownerSurname = ownerSurname;
    this.vote = vote;
  }

}



