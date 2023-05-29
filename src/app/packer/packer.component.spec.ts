import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PackerComponent } from './packer.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('PackerComponent', () => {
  let component: PackerComponent;
  let fixture: ComponentFixture<PackerComponent>;
  let el:DebugElement; 

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [PackerComponent]
  //   });
  //   fixture = TestBed.createComponent(PackerComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [PackerComponent]
  //   }).compileComponents().then(() => {
  //    fixture = TestBed.createComponent(PackerComponent);
  //    component = fixture.componentInstance;
  //   })
  // })

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


  // it('should have correct contents', () => {
  //  let heroElements = el.queryAll(By.css('p'))
  //   expect(heroElements[0].nativeElement.textContent).toBe('Home works!')
  //   let buttonElements = el.queryAll(By.css('btn-get-started'));
  //   expect(buttonElements[0].nativeElement.textContent).toBe('Welcome to')

  // })
});
