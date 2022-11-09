import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareCartDetailsComponent } from './care-cart-details.component';

describe('CareCartDetailsComponent', () => {
  let component: CareCartDetailsComponent;
  let fixture: ComponentFixture<CareCartDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareCartDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareCartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
