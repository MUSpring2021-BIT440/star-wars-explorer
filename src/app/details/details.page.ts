import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Person } from '../interfaces/person';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public personDetail: Person;

  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit() {
    this.getStarWarsDetails();
  }

  getStarWarsDetails() {
    const starWarsId = +this.route.snapshot.paramMap.get('id');
  
    this.data.getPerson(starWarsId).subscribe( (person: any) => {
      console.log('Person!', person)
      this.personDetail = person;
    })
  }

}

// In class
// - make a service
// - MAKE OUR OWN APIS

// Homework will be:
// - make good lookin' data view
// - implement service
// - Make Github pages API
