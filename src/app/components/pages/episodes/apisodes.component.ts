import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/shared/services/data.service';

@Component({
  selector: 'app-apisodes',
  templateUrl: './apisodes.component.html',
  styleUrls: ['./apisodes.component.scss'],
})
export class ApisodesComponent implements OnInit {
  episodes$ = this.dataSvc.episodes$;
  constructor(private dataSvc: DataService) {}

  ngOnInit(): void {}
}
