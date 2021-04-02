import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from './interfaces/person'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public variable_name: string = "Brock"

  constructor(private httpClient: HttpClient) { }

  getPeople() {
    return this.httpClient.get('https://swapi.dev/api/people/');
  }

  getPerson(id) {
    return this.httpClient.get(`https://swapi.dev/api/people/${id}`);
  }
}
