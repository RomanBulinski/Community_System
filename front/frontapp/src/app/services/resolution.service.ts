import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Owner} from "../common/owner";
import {Resolution} from "../common/Resolution";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ResolutionService {

  constructor(private http:HttpClient) { }

  private resolutionsUrl = 'http://localhost:8080/resolutions';

  public getResolutions() {
    return this.http.get<Resolution[]>(this.resolutionsUrl);
  }

  public getResolutionByID( id: string) {
    return this.http.get<Resolution>(this.resolutionsUrl + '/' + id );
  }





  // public deleteUser(owner) {
  //   return this.http.delete(this.ownersUrl + "/"+ owner.id);
  // }
  //
  // public createOwner(owner: Owner) {
  //   return this.http.post<Owner>(this.ownersUrl, owner);
  // }


}
