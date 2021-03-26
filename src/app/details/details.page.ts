import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    this.getStarWarsDetails();
  }

  getStarWarsDetails() {
    const starWarsId = +this.route.snapshot.paramMap.get('id');
  
    this.httpClient.get(`https://swapi.dev/api/people/${starWarsId}`).subscribe( (person: any) => {
      console.log('Person!', person)
    })
  }

}
