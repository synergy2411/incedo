import { TestBed } from "@angular/core/testing"
import { UserService } from './user.service'

describe("User Service : ", () => {
  let userService : UserService;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers :     [UserService]
    })
    userService = new UserService();
  })

  it("should return Some Value", () => {
    expect(userService.getData()).toBe("Some Value");
  })

  it("should return Promise Value", (done : DoneFn) => {
    userService.getPromise().then(response => {
      expect(response).toBe("Promise Value");
      done();
    })
  })

  it("should return First Package", (done :DoneFn) => {
    userService.getObservable().subscribe(response => {
      expect(response).toBe("First Package");
      done();
    })
  })
})
