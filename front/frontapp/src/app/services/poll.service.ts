import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PollDTO} from "../common/PollDTO";


@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http: HttpClient) {
  }

  private pollsUrl = 'http://localhost:8080/polls';

  public getPolls() {
    return this.http.get<PollDTO[]>(this.pollsUrl);
  }

  public createPoll(poll: PollDTO) {
    return this.http.post<PollDTO>(this.pollsUrl, poll);
  }

  public getPollByID(id: string) {
    return this.http.get<PollDTO>(this.pollsUrl + "/" + id);
  }

}


