import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {OwnerDTO} from "../../common/OwnerDTO";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class OwnerService {

  constructor(private http:HttpClient) { }

  private OWNERS_URL = 'http://localhost:8080/owners';

  public getOwners(): Observable<any> {
    return this.http.get<OwnerDTO[]>(this.OWNERS_URL);
  }

  public deleteUser(owner): Observable<any> {
    return this.http.delete(this.OWNERS_URL + "/" + owner.id);
  }

  public createOwner(owner: OwnerDTO): Observable<any> {
    return this.http.post<OwnerDTO>(this.OWNERS_URL, owner);
  }

  public modifyOwner(owner: OwnerDTO): Observable<any> {
    return this.http.put<OwnerDTO>(this.OWNERS_URL + "/" + owner.id, owner);
  }

}
