import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareCartComponent } from './care-cart.component';

describe('CareCartComponent', () => {
  let component: CareCartComponent;
  let fixture: ComponentFixture<CareCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
