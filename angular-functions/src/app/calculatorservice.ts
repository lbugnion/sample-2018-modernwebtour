import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CalculatorService {
  constructor(private http: HttpClient) { }

  addUrl = 'FUNCTION_URL_HERE';

  getResult(num1, num2) {
    return this.http.get(this.addUrl.replace('{num1}', num1).replace('{num2}', num2));
  }
}