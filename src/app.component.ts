import { Component } from '@angular/core';
import { Quote } from './quote.model';
import { QuoteService } from './quote.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>Quote Of The Day</h1>
    <p><em>{{quote?.line}}</em> - {{quote?.author}}</p> // ? bezpieczny operator. Jeżeli jest zdefiniowany to wyświetla, jeśli nie to nie wyświetlaj. Http jest asynchroniczny więc wartość pojawia się po chwili.
  `
})
export class AppComponent {

  quote: Quote;

  constructor(quoteService: QuoteService) {
    quoteService.getQuoteOfTheDay()
      .then(quote => this.quote = quote);
  }

}
