import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule, RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
