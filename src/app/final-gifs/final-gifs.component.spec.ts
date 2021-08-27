import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalGifsComponent } from './final-gifs.component';

describe('FinalGifsComponent', () => {
  let component: FinalGifsComponent;
  let fixture: ComponentFixture<FinalGifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalGifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
