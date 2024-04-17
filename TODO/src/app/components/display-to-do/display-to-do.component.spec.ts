import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayToDoComponent } from './display-to-do.component';

describe('DisplayToDoComponent', () => {
  let component: DisplayToDoComponent;
  let fixture: ComponentFixture<DisplayToDoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayToDoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
