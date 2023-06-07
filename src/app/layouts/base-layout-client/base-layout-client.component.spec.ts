import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLayoutClientComponent } from './base-layout-client.component';

describe('BaseLayoutClientComponent', () => {
  let component: BaseLayoutClientComponent;
  let fixture: ComponentFixture<BaseLayoutClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseLayoutClientComponent]
    });
    fixture = TestBed.createComponent(BaseLayoutClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
