import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerModifyComponent } from './owner-modify.component';

describe('OwnerModifyComponent', () => {
  let component: OwnerModifyComponent;
  let fixture: ComponentFixture<OwnerModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
