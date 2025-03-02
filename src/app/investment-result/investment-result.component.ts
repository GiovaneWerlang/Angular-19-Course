import { Component, Input } from '@angular/core';
import { Results } from './models/results.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-result',
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  @Input({required: true}) results?: Results[];
}
