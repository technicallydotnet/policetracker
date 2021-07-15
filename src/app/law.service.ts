import { Injectable } from '@angular/core';
import { Crime } from './models/crime.model';
import { Person } from './models/person.model';
import { Sentence } from './models/sentence.model';

@Injectable({
  providedIn: 'root'
})
export class LawService {
  crimes?:Crime[] = [new Crime(1,"Treason!","05/11/1606","Houses of parliament","King James I",[new Person(1,"Guy","Fawkes",undefined,undefined)])];
  persons?:Person[];
  sentences?:Sentence[];

  constructor() { }

  searchCrime(searchTerm:string):Crime[]{
    let crimeResults:Crime[] = [];
    if (this.crimes != null) {
      this.crimes.forEach(c => {
        if(c.location == searchTerm){
          crimeResults.push(c);
        }
        if(c.name == searchTerm){
          crimeResults.push(c);
        }
        if(c.victimName == searchTerm){
          crimeResults.push(c);
        }
      });
    }
    return crimeResults;
  }
  searchPerson(searchTerm:string){
    let personResults:Person[] = [];
    if (this.persons != null) {
      this.persons.forEach(p => {
        if(p.firstName == searchTerm){
          personResults.push(p);
        }
        if(p.lastName == searchTerm){
          personResults.push(p);
        }
        if(p.firstName + " " + p.lastName == searchTerm){
          personResults.push(p);
        }
      });
    }
    return personResults;
  }
  searchSentences(searchTerm:string){
    let sentenceResults:Sentence[] = [];
    if (this.sentences != null) {
      this.sentences.forEach(s => {
        if(s.period == searchTerm){
          sentenceResults.push(s);
        }
        if(s.sentenceType == searchTerm){
          sentenceResults.push(s);
        }
        if(s.completed == searchTerm){
          sentenceResults.push(s);
        }
        if(s.started == searchTerm){
          sentenceResults.push(s);
        }
      });
    }
    return sentenceResults;
  }

  getCrime(id:number){
    if(this.crimes == undefined){
      return new Crime(0,"No crimes found",undefined,undefined,undefined,undefined);
    }
    return this.crimes[id];
  }
  getCrimes(): Crime[]{
    if(this.crimes == undefined){
      return [new Crime(0,"No crimes found",undefined,undefined,undefined,undefined)];
    }
    return this.crimes;
  }
  addCrime(c:Crime){
    this.crimes?.push(c);
  }
  editCrime(c:Crime){
    if(c.crimeId != null && this.crimes != null){
      this.crimes[c.crimeId].date = c.date;
      this.crimes[c.crimeId].location = c.location;
      this.crimes[c.crimeId].name = c.name;
      this.crimes[c.crimeId].persons = c.persons;
      this.crimes[c.crimeId].victimName = c.victimName;
    }
  }
  deleteCrime(c:Crime){
    if(this.crimes != null && c.crimeId != null){
      if(this.crimes[c.crimeId] != null){
        this.crimes.slice(c.crimeId,1);
      }
    }
  }

  getPerson(id:number){
    if(this.crimes == undefined){
      return new Person(0,"No crimes found",undefined,undefined,undefined);
    }
    return this.crimes[id];
  }
  getPersons(){
    if(this.crimes == undefined){
      return new Person(0,"No crimes found",undefined,undefined,undefined);
    }
    return this.crimes;
  }
  addPerson(p:Person){
    this.persons?.push(p);
  }
  editPerson(p:Person){
    if(p.personId != null && this.persons != null){
      this.persons[p.personId].firstName = p.firstName;
      this.persons[p.personId].lastName = p.lastName;
      this.persons[p.personId].crimes = p.crimes;
      this.persons[p.personId].sentences = p.sentences;
    }
  }
  deletePerson(p:Person){
    if(this.persons != null && p.personId != null){
      if(this.persons[p.personId] != null){
        this.persons.slice(p.personId,1);
      }
    }
  }

  getSentence(id:number){
    if(this.crimes == undefined){
      return new Sentence(0,"No sentence found",undefined,undefined,undefined);
    }
    return this.crimes[id];
  }
  getSentences(){
    if(this.crimes == undefined){
      return new Sentence(0,"No sentence found",undefined,undefined,undefined);
    }
    return this.crimes;
  }
  addSentence(s:Sentence){
    this.sentences?.push(s);
  }
  editSentence(s:Sentence){
    if(s.sentenceId != null && this.sentences != null){
      this.sentences[s.sentenceId].completed = s.completed;
      this.sentences[s.sentenceId].period = s.period;
      this.sentences[s.sentenceId].sentenceType = s.sentenceType;
      this.sentences[s.sentenceId].started = s.started;
    }
  }
  deleteSentence(p:Sentence){
    if(this.sentences != null && p.sentenceId != null){
      if(this.sentences[p.sentenceId] != null){
        this.sentences.slice(p.sentenceId,1);
      }
    }
  }

}
