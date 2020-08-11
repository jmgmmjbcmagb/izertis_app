import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})

export class SearchBarComponent implements OnInit {

  @Output() filterElemnts: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public literalSearch(literal: string) {
    this.filterElemnts.emit(literal);
  }

}
