import { ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let el:DebugElement;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  

//This our to be tested unit, we
  // beforeEach(() => TestBed.configureTestingModule({
  //   imports: [RouterTestingModule],
  //   declarations: [AppComponent]
  // }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  //Test the app if it render
  it('should render title in a h2 tag', async() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Welcome to packer application')
    
  });


  it('should call processInput on button click', () => {
    // Get a reference to the button element
    const button = fixture.debugElement.query(By.css('.process-btn')).nativeElement;
  
    // Set the fileInput property in the component to a mock value
    component.fileInput = fixture.debugElement.query(By.css('#file')).nativeElement;
  
    // Spy on the component's processInput method
    const processInputSpy = spyOn(component, 'processInput');
  
    // Simulate a click event on the button
    button.click();
  
    // Verify that the processInput method was called with the expected argument
    expect(processInputSpy).toHaveBeenCalledWith(component.fileInput);
  });
  

});
