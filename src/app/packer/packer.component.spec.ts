import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PackerComponent } from './packer.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('PackerComponent', () => {
  let component: PackerComponent;
  let fixture: ComponentFixture<PackerComponent>;
  let el:DebugElement; 

  beforeEach(waitForAsync(
    () => {
      TestBed.configureTestingModule({
        declarations: [PackerComponent]
      }).compileComponents().then(() => {
       fixture = TestBed.createComponent(PackerComponent);
       component = fixture.componentInstance
       el = fixture.debugElement;
      })
    }
  ))

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
