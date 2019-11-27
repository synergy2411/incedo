import { Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { UsersComponent } from './users/users.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';

export const APP_ROUTES: Routes = [{
  path: "",                             // http://localhost:4200
  redirectTo: "login",
  pathMatch: "full"
}, {
  path: "login",                        // http://localhost:4200/login
  component: LoginComponent
}, {
  path: "register",
  component: RegisterComponent
}, {
  path: "pipe",
  component: PipeDemoComponent
}, {
  path: "observable",
  component: ObservableDemoComponent
}, {
  path: "users",
  component: UsersComponent
}, {
  path: "**",
  redirectTo: "login",
  pathMatch: 'full'
}]
