import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideostwoComponent } from './videostwo.component';

describe('VideostwoComponent', () => {
  let component: VideostwoComponent;
  let fixture: ComponentFixture<VideostwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideostwoComponent]
    });
    fixture = TestBed.createComponent(VideostwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
