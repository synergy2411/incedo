import { TestBed } from "@angular/core/testing"
import { AppComponent } from './app.component';


describe("App Component : ", () => {

  beforeEach(()=> {
    TestBed.configureTestingModule({
      declarations :      [AppComponent]
    }).compileComponents();
  })

  it("Should be created", ()=> {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })

  it("should have title value as test-app", () => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toBe("test-app")
  })

  it("should have Hello test-app", () =>{
    let fixture = TestBed.createComponent(AppComponent);
    let compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    console.log(compiled.querySelector("p").textContent);
    expect(compiled.querySelector("p").textContent).toContain("Hello test-app");
  })

  
})
