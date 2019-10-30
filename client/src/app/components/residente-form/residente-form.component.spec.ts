import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenteFormComponent } from './residente-form.component';

describe('ResidenteFormComponent', () => {
  let component: ResidenteFormComponent;
  let fixture: ComponentFixture<ResidenteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidenteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidenteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
