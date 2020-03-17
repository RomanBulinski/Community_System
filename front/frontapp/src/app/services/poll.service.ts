import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Poll} from "../common/Poll";

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http:HttpClient) { }

  private pollsUrl = 'http://localhost:8080/polls';

  public getPolls() {
    return this.http.get<Poll[]>( this.pollsUrl );
  }


}
