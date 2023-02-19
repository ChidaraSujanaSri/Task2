import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadFAComponent } from './read-fa.component';

describe('ReadFAComponent', () => {
  let component: ReadFAComponent;
  let fixture: ComponentFixture<ReadFAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadFAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadFAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
