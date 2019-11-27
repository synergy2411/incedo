import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
    ObservableDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
