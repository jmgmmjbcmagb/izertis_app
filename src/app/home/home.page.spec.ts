import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {

  let component: HomePage;

  beforeEach( () => component = new HomePage() );

  it('Function filter reasigne literalFilter variable', () => {
    const literal = 'test';
    component.filter(literal);
    expect(component.literalFilter).toBe(literal);
  });

});
