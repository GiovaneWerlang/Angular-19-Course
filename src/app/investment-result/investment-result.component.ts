import { Component, computed } from '@angular/core';
import { Results } from './models/results.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-result',
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {

  constructor(private investmentService: InvestmentService) {
  }

  results = computed(() =>
    this.investmentService.resultsData()
  );


}
