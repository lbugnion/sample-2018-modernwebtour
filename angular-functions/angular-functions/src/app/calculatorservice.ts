import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CalculatorService {
  constructor(private http: HttpClient) { }

  addUrl = 'https://lbcalculator.azurewebsites.net/api/add/num1/{num1}/num2/{num2}?code=r9o3qY/Zy0slf4IddK0qq8dNxkDraglwGKaKaCp3D8PFGAorrWosIQ==';

  getResult(num1, num2) {
    return this.http.get(this.addUrl.replace('{num1}', num1).replace('{num2}', num2));
  }
}