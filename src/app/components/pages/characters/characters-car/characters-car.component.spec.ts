import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersCarComponent } from './characters-car.component';

describe('CharactersCarComponent', () => {
  let component: CharactersCarComponent;
  let fixture: ComponentFixture<CharactersCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
