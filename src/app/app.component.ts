import { Component } from '@angular/core';
import { ServiceResponse } from './models/service.response';
import { Observable } from 'rxjs';
import { Team } from './models/team.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01_Angular_empty';
  teams:Team[]
  serviceResponse:ServiceResponse
  oServiceResponse:Observable<ServiceResponse>
  serviceURL = "https://www.balldontlie.io/api/v1/teams/"


  constructor(public http:HttpClient){
    this.makeTypedRequest()
  }
  makeTypedRequest() : void
  {
    this.oServiceResponse = this.http.get<ServiceResponse>(this.serviceURL);
    this.oServiceResponse.subscribe(d => {this.teams = d.data;});
  } 
}
