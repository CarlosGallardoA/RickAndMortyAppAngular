import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersListRoutingModule } from './characters-list-routing.module';
import { CharactersListComponent } from './characters-list.component';
import { CharactersCarModule } from '@characters/characters-car/characters-car.module';

@NgModule({
  declarations: [CharactersListComponent],
  imports: [CommonModule, CharactersListRoutingModule, CharactersCarModule],
})
export class CharactersListModule {}
