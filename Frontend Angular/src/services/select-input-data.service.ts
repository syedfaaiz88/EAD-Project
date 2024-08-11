import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectInputDataService {

  constructor(private http:HttpClient) { }

  getSelectInputData()
  {
    return this.http.get('assets/selectInputData.json');
  }
}
