import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeWatchEpComponent } from './anime-watch-ep.component';

describe('AnimeWatchEpComponent', () => {
  let component: AnimeWatchEpComponent;
  let fixture: ComponentFixture<AnimeWatchEpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeWatchEpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeWatchEpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
