import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Quote } from './quote.model';

@Injectable()
export class QuoteService {

  constructor(private http : Http) { }

  getQuoteOfTheDay(): Promise<Quote> { // zwracamy obietnicę cytatu. Wynik jest zwracany gdy dostaniemy odpowiedź z serwera

    return this.http.get('/quote.json').toPromise() // żądanie http get jest asynchroniczne dlatego musimy użyć toPromise. trzeba zaimportować rxjs/Rx.
      .then(response => response.json());
  }
}
