import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackerComponent } from './packer.component';

describe('PackerComponent', () => {
  let component: PackerComponent;
  let fixture: ComponentFixture<PackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackerComponent]
    });
    fixture = TestBed.createComponent(PackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
