import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { MenuItem } from '../MenuItem';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FaasosApiService {

  constructor(private http: Http) {
   }

   /**
    * Create Headers for API call
    * @param headers 
    * @return {Headers} headers
    */
   createHeaders(headers: Headers){
      headers.append('Content-Type', 'application/json');
      return headers; 
   }

   /**
    * Service call to place the order
    * @param {JSON} payload Payload for the service
    * @return {Boolean}
    */
  createOrder(payload): Observable<any>{
    let header = this.createHeaders(new Headers());
    return this.http.post('dishes/createOrder', payload, {headers: header})
    .pipe(map((data: any) => {
      console.log(data._body);
      return true;
    }));
  }

  /**
    * Service call to get all the item details
    * @return {Array} Array of items
    */
  getDisplayData(): Observable<any>{
    let header = this.createHeaders(new Headers());
    return this.http.get('dishes/getData', {headers: header})
    .pipe(map((data: any) => {
      console.log(data._body);
      return data._body;
    }));
  }

  /**
    * Service call to update the Order Created Count
    * @param {JSON} payload Payload for the service
    * @return {Boolean}
    */
  updateCreatedCount(payload): Observable<any>{
    let header = this.createHeaders(new Headers());
    return this.http.post('dishes/createdCount', payload, {headers: header})
    .pipe(map((data: any) => {
      console.log(data._body);
      return true;
    }));
  }

  /**
    * Service call to set the Predictions for an item
    * @param {JSON} payload Payload for the service
    * @return {Boolean}
    */
  setPrediction(payload): Observable<any>{
    let header = this.createHeaders(new Headers());
    return this.http.post('dishes/setPrediction', payload, {headers: header})
    .pipe(map((data: any) => {
      console.log(data._body);
      return true;
    }));
  }
}
