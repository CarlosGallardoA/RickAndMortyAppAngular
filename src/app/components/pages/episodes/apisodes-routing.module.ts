import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApisodesComponent } from './apisodes.component';

const routes: Routes = [{ path: '', component: ApisodesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApisodesRoutingModule { }
