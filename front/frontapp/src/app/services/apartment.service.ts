import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Apartment} from "../common/Apartment";

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor(private http:HttpClient) { }

  private apartmentUrl = 'http://localhost:8080/apartments';

  public getApartments() {
    return this.http.get<Apartment[]>(this.apartmentUrl);
  }
}
