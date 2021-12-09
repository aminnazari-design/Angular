import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  constructor(private http: HttpClient) {}
  create(obj) {
    return this.http.post(environment.parseEndPoint +"/classes/hotel", obj , {
      headers : new HttpHeaders({
        "X-Parse-Application-Id":environment.ParseApplicationId,
        "X-Parse-REST-API-Key": environment.ParseRESTAPIKey,
        "Content-Type": "application/json"
      })
    });
  }
}
