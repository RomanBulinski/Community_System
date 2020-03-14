import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Owner} from "../common/owner";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class OwnerService {

  constructor(private http:HttpClient) { }

  private ownersUrl = 'http://localhost:8080/owners';

  public getOwners() {
    return this.http.get<Owner[]>(this.ownersUrl);
  }

  public deleteUser(owner) {
    return this.http.delete(this.ownersUrl + "/"+ owner.id);
  }

  public createOwner(owner: Owner) {
    return this.http.post<Owner>(this.ownersUrl, owner);
  }

}
