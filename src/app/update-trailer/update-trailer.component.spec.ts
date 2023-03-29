import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrailerComponent } from './update-trailer.component';

describe('UpdateTrailerComponent', () => {
  let component: UpdateTrailerComponent;
  let fixture: ComponentFixture<UpdateTrailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTrailerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
