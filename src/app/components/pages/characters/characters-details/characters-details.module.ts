import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersDetailsRoutingModule } from './characters-details-routing.module';
import { CharactersDetailsComponent } from './characters-details.component';
import { CharactersCarModule } from '../characters-car/characters-car.module';

@NgModule({
  declarations: [CharactersDetailsComponent],
  imports: [CommonModule, CharactersDetailsRoutingModule, CharactersCarModule],
})
export class CharactersDetailsModule {}
