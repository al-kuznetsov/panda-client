import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalTypeMenuComponent } from './animal-type-menu.component';

describe('AnimalTypeMenuComponent', () => {
  let component: AnimalTypeMenuComponent;
  let fixture: ComponentFixture<AnimalTypeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalTypeMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalTypeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
