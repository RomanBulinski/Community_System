import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Poll} from "../common/Poll";
import {Owner} from "../common/owner";

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http:HttpClient) { }

  private pollsUrl = 'http://localhost:8080/polls';

  public getPolls() {
    return this.http.get<Poll[]>( this.pollsUrl );
  }

  public createPoll(poll: Poll) {
    return this.http.post<Poll>(this.pollsUrl, poll);
  }

  public getPollByID(id:string) {
    return this.http.get<Poll>( this.pollsUrl+"/"+id );
  }

}


