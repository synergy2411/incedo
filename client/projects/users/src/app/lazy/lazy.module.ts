import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAmLazyComponent } from './i-am-lazy/i-am-lazy.component';
import { RouterModule, Routes } from '@angular/router';


export const LAYZ_ROUTES : Routes = [{
  path : "",
  component : IAmLazyComponent
}]

@NgModule({
  declarations: [IAmLazyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(LAYZ_ROUTES)
  ]
})
export class LazyModule { }
