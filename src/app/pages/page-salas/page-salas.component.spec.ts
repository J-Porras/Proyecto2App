import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSalasComponent } from './page-salas.component';

describe('PageSalasComponent', () => {
  let component: PageSalasComponent;
  let fixture: ComponentFixture<PageSalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSalasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
