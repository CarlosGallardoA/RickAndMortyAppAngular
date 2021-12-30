import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Characters, DataResponse, Episode } from '../interface/data.interface';

const query = gql`
  {
    episodes {
      results {
        name
        episode
      }
    }
    characters {
      results {
        name
        status
        species
        gender
        origin {
          name
        }
        location {
          name
        }
        image
      }
    }
  }
`;
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private episodeSubject = new BehaviorSubject<Episode[]>(null);
  // eslint-disable-next-line @typescript-eslint/member-ordering
  episodes$ = this.episodeSubject.asObservable();
  private charactersSubject = new BehaviorSubject<Characters[]>(null);
  // eslint-disable-next-line @typescript-eslint/member-ordering
  characters$ = this.charactersSubject.asObservable();
  constructor(private apollo: Apollo) {
    this.getDataApi();
  }

  getDataApi() {
    this.apollo
      .watchQuery<DataResponse>({
        query,
      })
      .valueChanges.pipe(
        take(1),
        tap(({ data }) => {
          const { characters, episodes } = data;
          this.episodeSubject.next(episodes.results);
          this.charactersSubject.next(characters.results);
        })
      )
      .subscribe();
  }
}
