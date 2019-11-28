import { Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { UsersComponent } from './users/users.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { LoginGaurdService } from './services/login-gaurd.service';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { GridComponent } from './grid/grid.component';
import { NewEmployeeComponent } from './employee/new-employee/new-employee.component';

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
  component: UsersComponent,
  canActivate : [LoginGaurdService]
},{
  path : "product",
  component : ProductComponent,
  children : [{
    path : "",
    redirectTo : "overview",
    pathMatch : "full"
  },{
    path : "overview/:id/:category",
    component : OverviewComponent
  }, {
    path : "spec",
    component : SpecificationComponent
  }]
}, {
  path : "grid",
  component: GridComponent,
  canActivate : [LoginGaurdService]
},{
  path : "employee",
  component : NewEmployeeComponent
},{
  path : "lazy",
  loadChildren : "./lazy/lazy.module#LazyModule"                   // "path/to/module/filname#ModuleClassName"
},{
  path: "**",
  redirectTo: "login",
  pathMatch: 'full'
}]
