import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSingupComponent } from './ng-singup.component';

describe('NgSingupComponent', () => {
  let component: NgSingupComponent;
  let fixture: ComponentFixture<NgSingupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSingupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
