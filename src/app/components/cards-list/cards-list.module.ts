import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CardsListComponent } from './cards-list.component';
import { CardComponent } from '../card/card.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [CardsListComponent, CardComponent]
})

export class CardListModule {}
