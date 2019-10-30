import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenteListComponent } from './residente-list.component';

describe('ResidenteListComponent', () => {
  let component: ResidenteListComponent;
  let fixture: ComponentFixture<ResidenteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidenteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidenteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
