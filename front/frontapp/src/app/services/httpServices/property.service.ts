import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PropertyDTO} from "../../common/PropertyDTO";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  // private messageService: MessageService) { }

  constructor(private http: HttpClient) {
  }

  private propertiesUrl = 'http://localhost:8080/properties';

  public getProperties(): Observable<PropertyDTO[]> {
    return this.http.get<PropertyDTO[]>(this.propertiesUrl)
    //   .pipe(
    //     tap(_ => this.log('fetched properties')),
    //     catchError(this.handleError<PropertyDTO[]>('getHeroes', []))
    // );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`PropertyService: ${message}`);
  }


}
