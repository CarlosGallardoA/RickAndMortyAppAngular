import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApisodesRoutingModule } from './apisodes-routing.module';
import { ApisodesComponent } from './apisodes.component';


@NgModule({
  declarations: [ApisodesComponent],
  imports: [
    CommonModule,
    ApisodesRoutingModule
  ]
})
export class ApisodesModule { }
