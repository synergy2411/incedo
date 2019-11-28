import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AgGridModule } from '@ag-grid-community/angular';
import { EmployeeModule } from './employee/employee.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { NationalCodePipe } from 'projects/users/pipes/nationalcode.pipe';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HighlightDirective } from './directives/highlight.directives';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { FilterPipe } from './pipes/filter.pipe';
import { UserImgComponent } from './users/user-img/user-img.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { UsersComponent } from './users/users.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { APP_ROUTES } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecificationComponent } from './product/specification/specification.component';
import { GridComponent } from './grid/grid.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { counterReducer } from './store/counter.reducer';
import { CounterComponent } from './counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserImgComponent,
    UserInfoComponent,
    HighlightDirective,
    PipeDemoComponent,
    NationalCodePipe,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    ObservableDemoComponent,
    HeaderComponent,
    ProductComponent,
    OverviewComponent,
    SpecificationComponent,
    GridComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    EmployeeModule,
    StoreModule.forRoot({counterReducer}), StoreDevtoolsModule.instrument(),
    FormsModule, ReactiveFormsModule,AgGridModule.withComponents([]),
    HttpClientModule, RouterModule.forRoot(APP_ROUTES, {
      preloadingStrategy : PreloadAllModules
    }), ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
