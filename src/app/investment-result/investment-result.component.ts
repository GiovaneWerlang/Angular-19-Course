import { Component, Input } from '@angular/core';
import { Results } from './models/results.model';

@Component({
  selector: 'app-investment-result',
  imports: [],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  @Input({required: true}) results?: Results[];
}
