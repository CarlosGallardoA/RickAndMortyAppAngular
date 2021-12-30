import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApisodesComponent } from './apisodes.component';

describe('ApisodesComponent', () => {
  let component: ApisodesComponent;
  let fixture: ComponentFixture<ApisodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApisodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
