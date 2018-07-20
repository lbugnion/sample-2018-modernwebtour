import { Component } from '@angular/core';
import { CalculatorService } from './calculatorservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  result : any = {
    result : "Nothing yet"
  };
  num1 = 12;
  num2 = 30;

  title = 'Testing Azure Functions';

  constructor(private calculator : CalculatorService) {}

  getResult() {

    this.result = {
      result : "Please wait"
    };

    this.calculator
      .getResult(this.num1, this.num2)
      .subscribe(data => (this.result = data));
  }
}
