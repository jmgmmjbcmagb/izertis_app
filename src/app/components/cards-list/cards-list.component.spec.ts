

import { CardsListComponent } from './cards-list.component';
import { ElementsService } from '../../services/elements.service';
import { ProgressElements } from 'src/app/interfaces/progress-elements.interface';



describe('CardsListComponent', () => {

  let component: CardsListComponent;
  let elService: ElementsService;

  beforeEach(() => {
    elService = new ElementsService(null);
    elService.elements = [{
      id: 0,
      photo: 'test',
      text: 'test',
    }];
    component = new CardsListComponent(elService);
    component.ngOnInit();
  });

  it('addElements', () => {
    component.updateListShow();
    expect(component.listElementShow.length).toEqual(1);
  });

  it('check disable', () => {
    expect(component.checkDisabled()).toBe(1);
  });

});
