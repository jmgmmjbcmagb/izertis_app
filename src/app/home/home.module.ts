import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LoadingBarComponent } from '../components/loading-bar/loading-bar.component';
import { CardsListComponent } from '../components/cards-list/cards-list.component';
import { CardComponent } from '../components/card/card.component';
import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule, TranslateModule.forChild()],
  declarations: [HomePage, LoadingBarComponent, CardsListComponent, CardComponent, SearchBarComponent],
})
export class HomePageModule {}
