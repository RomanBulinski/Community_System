import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {OwnerDTO} from "../common/OwnerDTO";
import {Observable} from "rxjs";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class OwnerService {

  constructor(private http:HttpClient) { }

  private ownersUrl = 'http://localhost:8080/owners';

  public getOwners() {
    return this.http.get<OwnerDTO[]>(this.ownersUrl);
  }

  public deleteUser(owner): Observable<any> {
    return this.http.delete(this.ownersUrl + "/" + owner.id);
  }

  public createOwner(owner: OwnerDTO) {
    return this.http.post<OwnerDTO>(this.ownersUrl, owner);
  }

  public modifyOwner(owner: OwnerDTO) {
    return this.http.put<OwnerDTO>(this.ownersUrl + "/" + owner.id, owner);
  }

}
