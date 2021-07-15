import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Crime } from '../models/crime.model';

@Component({
  selector: 'app-crime-dialog',
  templateUrl: './crime-dialog.component.html'
})
export class CrimeDialogComponent implements OnInit {
  c:Crime;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {c:Crime}) { 
    this.c = data.c;
  }
  
  ngOnInit(): void {
  }

}
