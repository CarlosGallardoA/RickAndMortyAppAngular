import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Characters } from '@app/shared/interface/data.interface';
import { LocalStorageService } from '@app/shared/services/localStorage.service';

@Component({
  selector: 'app-characters-car',
  templateUrl: './characters-car.component.html',
  styleUrls: ['./characters-car.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersCarComponent implements OnInit {
  @Input() character: Characters;
  constructor(private localStorageSvc: LocalStorageService) {}

  ngOnInit(): void {}
  getIcon(): string {
    return this.character.isFavorite ? 'heart-solid.svg' : 'heart.svg';
  }
  toggleFavorite(): void {
    const idFavorite = this.character.isFavorite;
    this.getIcon();
    this.character.isFavorite = !idFavorite;
    this.localStorageSvc.addOrRemoveFavorite(this.character);
  }
}
