import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/shared/services/data.service';
import { LocalStorageService } from '@app/shared/services/localStorage.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  characters$ = this.dataSvc.characters$;
  constructor(
    private dataSvc: DataService,
    private localeStorageSvc: LocalStorageService
  ) {}

  ngOnInit(): void {}
}
