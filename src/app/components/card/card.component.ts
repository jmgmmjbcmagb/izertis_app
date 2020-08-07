import { Component, OnInit, Input } from '@angular/core';
import { ElementPicsum } from '../../interfaces/elemenPicsumt';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input()elementInfo: ElementPicsum;

  constructor() { }

  ngOnInit() {
  }

}
