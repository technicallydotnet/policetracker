import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CrimeDialogComponent } from './crime-dialog/crime-dialog.component';
import { LawService } from './law.service';
import { Crime } from './models/crime.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'law';
  searchField = new FormControl("");
  crimes:Crime[] = [];
  tableColumns:string[] = ["name","date","details"];

  crimeForm = new FormGroup({
    cname:new FormControl(""),
    cdate:new FormControl(""),
    clocation:new FormControl(""),
    cvictimname:new FormControl("")
  });

  constructor(private repo:LawService, public dialog:MatDialog){
    this.crimes = this.repo.getCrimes();
  }

  SearchCrime(){
    this.repo.searchCrime(this.searchField.value);
  }
  ResetCrimes(){
    this.repo.getCrimes();
  }
  AddCrime(){
    this.repo.addCrime(
      new Crime(this.crimes.length+1,
                this.crimeForm.get("cname")?.value,
                this.crimeForm.get("cdate")?.value,
                this.crimeForm.get("clocation")?.value,
                this.crimeForm.get("cvictimname")?.value,
                undefined));
    this.crimes = this.repo.getCrimes();
  }
  CrimeDetails(ca:Crime){
    this.dialog.open(CrimeDialogComponent,{data:{c:ca}})
  }
}
