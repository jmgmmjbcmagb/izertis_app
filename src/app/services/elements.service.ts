import { Injectable, EventEmitter } from '@angular/core';
import { ElementPicsum } from '../interfaces/elemenPicsumt';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { debug } from 'console';
import { LoremIpsumService } from './lorem-ipsum.service';
import { element } from 'protractor';
import { ProgressElements } from '../interfaces/progress-elements';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  // tslint:disable-next-line:variable-name
  private _elements: ElementPicsum[] = [];
  private elementAdded: EventEmitter<ProgressElements> = new EventEmitter();

  constructor(private loremIpsumSrv: LoremIpsumService) {
    console.log(environment);
  }

  get elements(): ElementPicsum[] {
    return this._elements;
  }

  public async generateElement(totalElements: number) {
    for (let i = 0; i < totalElements; i++) {
      const text = await this.loremIpsumSrv.getLoremIpsumParagraf();
      this.elements.push(
        {
          id: i,
          photo: `${environment.API_URL}id/${i}/500/500`,
          text: text[0]
        }
      );
      this.elementAdded.emit({
        actualLength: this.elements.length,
        total: totalElements});
    }
  }

  public getElements(): EventEmitter<ProgressElements> {
    return this.elementAdded;
  }

}
