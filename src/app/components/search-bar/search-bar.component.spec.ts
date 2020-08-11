import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchBarComponent } from './search-bar.component';

describe('SearchBarComponent', () => {

  let component: SearchBarComponent;

  beforeEach(() => (component = new SearchBarComponent()));

  it('Emit vaule checked', () => {
    let valueCheck: string;
    const msg = 'test';

    component.filterElemnts.subscribe((value: string) => {
      valueCheck = value;
    });

    component.literalSearch(msg);

    expect(valueCheck).toBe(msg);
  });
});
