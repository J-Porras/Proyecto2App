import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoLinkComponent } from './nuevo-link.component';

describe('NuevoLinkComponent', () => {
  let component: NuevoLinkComponent;
  let fixture: ComponentFixture<NuevoLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
