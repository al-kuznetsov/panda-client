import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleErrorModalComponent } from './simple-error-modal.component';

describe('SimpleErrorModalComponent', () => {
  let component: SimpleErrorModalComponent;
  let fixture: ComponentFixture<SimpleErrorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleErrorModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
