import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Property} from "../common/Property";

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http:HttpClient) { }

  private propertiesUrl = 'http://localhost:8080/properties';

  public getProperties() {
    return this.http.get<Property[]>( this.propertiesUrl );
  }
}
