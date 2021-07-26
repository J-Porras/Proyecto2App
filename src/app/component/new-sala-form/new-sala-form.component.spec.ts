import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSalaFormComponent } from './new-sala-form.component';

describe('NewSalaFormComponent', () => {
  let component: NewSalaFormComponent;
  let fixture: ComponentFixture<NewSalaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSalaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSalaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
