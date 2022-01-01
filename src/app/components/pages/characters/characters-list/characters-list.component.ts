import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DataService } from '@app/shared/services/data.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss'],
})
export class CharactersListComponent implements OnInit {
  characters$ = this.dataSvc.characters$;
  showButton = false;
  private scrollHeight = 500;
  private pageNum = 1;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private dataSvc: DataService
  ) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffset = window.pageYOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOffset || scrollTop) > this.scrollHeight;
  }
  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }
  onScrollDown(): void {
    this.dataSvc.getCharactersByPage(this.pageNum++);
  }
  ngOnInit(): void {}
}
