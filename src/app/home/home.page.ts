import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public literalFilter: string;

  constructor() {}

  public filter(literal: string) {
    this.literalFilter = literal;
  }

}
