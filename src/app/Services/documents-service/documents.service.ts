import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Documents } from '../../Models/documents.model';

@Injectable({ providedIn: 'root' })
export class DocumentsService {
  constructor(private http: HttpClient) {}

  /** POST: add a new hero to the database */
  getDocuments(dateStart): Observable<Documents> {
    const documentsUrl = 'http://localhost:5000/documentos';
    const body = JSON.stringify({ dateStart });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post<Documents>(documentsUrl, body, httpOptions);
  }
}
