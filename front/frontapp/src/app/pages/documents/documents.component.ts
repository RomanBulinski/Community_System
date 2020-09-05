import {Component, OnInit} from '@angular/core';
import {OwnerDTO} from "../../common/OwnerDTO";
import {OwnerService} from "../../services/httpServices/owner.service";
import {DocumentService} from "../../services/httpServices/document.service";
import {DocumentDTO} from "../../common/DocumentDTO";

@Component({
    selector: 'app-documents',
    templateUrl: './documents.component.html',
    styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

    documents: DocumentDTO[];
  fileData: string;

  selectedFile: File;
  retrievedDoc: DocumentDTO;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;


  constructor(private documentService: DocumentService) {
    this.documentService.getDocuments().subscribe(data => this.documents = data);
  }

  ngOnInit(): void {
    this.fileData = this.documents[0].file_data.toString();
  }

  public findFile(event) {
    this.selectedFile = event.target.files[0];
  }

  onUploadFile() {
    this.documentService.saveDocument(this.selectedFile);
  }

  getDocument() {
    this.documentService.getDocument().subscribe(data => this.retrievedDoc = data);
    console.log(this.retrievedDoc)
    console.log(this.retrievedDoc.file_name)
    console.log(this.retrievedDoc.file_type)
  }


}

