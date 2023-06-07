import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLayoutAuthComponent } from './base-layout-auth.component';

describe('BaseLayoutAuthComponent', () => {
  let component: BaseLayoutAuthComponent;
  let fixture: ComponentFixture<BaseLayoutAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseLayoutAuthComponent]
    });
    fixture = TestBed.createComponent(BaseLayoutAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
