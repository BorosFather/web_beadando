import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacsivideoComponent } from './pacsivideo.component';

describe('PacsivideoComponent', () => {
  let component: PacsivideoComponent;
  let fixture: ComponentFixture<PacsivideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacsivideoComponent]
    });
    fixture = TestBed.createComponent(PacsivideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
