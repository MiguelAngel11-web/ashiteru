import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewanimeComponent } from './newanime.component';

describe('NewanimeComponent', () => {
  let component: NewanimeComponent;
  let fixture: ComponentFixture<NewanimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewanimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewanimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
