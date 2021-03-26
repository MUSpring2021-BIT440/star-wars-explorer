import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public people: any[] = []; 
  public cachedPeople: any[] = [];
  
  public searchTerm: string = "";

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get('https://swapi.dev/api/people/').subscribe((apiData: any) => {
      console.log("PEOPLESZ!!", apiData);
      
      // loop through all of the items returned and use their index in the array 
      // as their ID field to be used with the /details/:id route
      const peopleWithIds = apiData.results.map( (person: any, index: number) => {
        person.id = index + 1
        return person
      })

      console.log("People with Ids", peopleWithIds);

      this.people = peopleWithIds;

      console.log(this.people)
    })

  }

  searchForAPerson() {
    console.log('Searching for ', this.searchTerm);

    // 1 if searchTerm is blank OR empty, restore the original list 
    if(this.searchTerm === "" || this.searchTerm === null) {
      this.people = this.cachedPeople;
      
      this.cachedPeople = null

      return
    }

    // 2 save a copy of the items array
    this.cachedPeople = this.people;

    // 3 filter out items from the array that don't match the searchTerm
    this.people = this.people.filter( (person: any) => {
      return person.name.toLowerCase().includes(this.searchTerm.toLowerCase());
    })


  }



}
