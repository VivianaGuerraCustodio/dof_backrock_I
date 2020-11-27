import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';

import moment from 'moment';
import { DocumentsService } from '../../Services/documents-service/documents.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class DocumentsComponent implements OnInit {
  date = new FormControl(moment([2017, 0, 1]));
  urlDof = 'https://sidof.segob.gob.mx/welcome/';
  // documentsDay = this.urlDof + day;
  ngOnInit(): void {
    this.getDocuments();
  }

  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  constructor(private documentsService: DocumentsService) {}

  getDocuments() {
    const dateStart = '25-11-2020';
    this.documentsService.getDocuments(dateStart).subscribe((document) => {
      console.log(document);
    });
  }
}
