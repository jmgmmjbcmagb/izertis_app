import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ElementPicsum } from '../../interfaces/elemenPicsumt';
import { ElementsService } from '../../services/elements.service';
import { ProgressElements } from 'src/app/interfaces/progress-elements';
import { IonInfiniteScroll } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent implements OnInit {

  private allElements: ElementPicsum[] = [];
  public listElementShow: ElementPicsum[] = [];
  public literalFilter: string;
  public loading = true;

  @Input()
  set filterElemnts(val: string) {
    this.loading = true;
    this.literalFilter = val;
    this.allElements = this.filterElements().slice(0, 10);
    this.listElementShow = this.allElements;
    this.loading = false;
  }

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private elementsSrv: ElementsService) {}

  ngOnInit() {
    const subsciptionElements: Subscription = this.elementsSrv
      .getElements()
      .subscribe((elemmentAdded: ProgressElements) => {
        if (elemmentAdded.actualLength === 10) {
          this.loading = false;
          this.allElements = this.filterElements().slice(0, 10);
          this.listElementShow = this.allElements;
          subsciptionElements.unsubscribe();
        }
      });
  }

  public addElements() {
    const actualLength = this.allElements.length;
    const newElements = this.filterElements().slice(
      actualLength,
      this.checkDisabled() ? actualLength + 10 : this.filterElements().length
    );
    this.allElements.push(...newElements);
  }

  public updateListShow(event) {
    setTimeout(() => {
      this.addElements();
      this.listElementShow = this.allElements;
      console.log(this.listElementShow);
      event.target.complete();
    }, 500);
  }

  public checkDisabled(): number {
    return this.filterElements().length - this.listElementShow.length;
  }

  private filterElements(): ElementPicsum[] {
    return this.literalFilter
      ? this.elementsSrv.elements.filter(
          (elementSelect: ElementPicsum) =>
            elementSelect.id === Number(this.literalFilter) ||
            elementSelect.text.includes(this.literalFilter)
        )
      : this.elementsSrv.elements;
  }
}
