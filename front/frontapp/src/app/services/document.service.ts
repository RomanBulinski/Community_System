import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DocumentDTO} from "../common/DocumentDTO";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  message: string;

  constructor(private http: HttpClient) {
  }

  private DOCUMENTS_URL = 'http://localhost:8080/documents';

  public getDocuments(): Observable<any> {
    return this.http.get<DocumentDTO[]>(this.DOCUMENTS_URL);
  }

  public saveDocument(file: File) {
    console.log(file);
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', file, file.name);
    this.http.post(this.DOCUMENTS_URL, uploadImageData, {observe: 'response'})
      .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'Image uploaded successfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
          console.log(this.message);
        }
      );
  }

  public getDocument(): Observable<any> {
    return this.http.get<Document>('http://localhost:8080/documents/1');
  }

}
