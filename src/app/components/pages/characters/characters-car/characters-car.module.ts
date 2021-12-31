import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersCarComponent } from './characters-car.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CharactersCarComponent],
  imports: [CommonModule, RouterModule],
  exports: [CharactersCarComponent],
})
export class CharactersCarModule {}
