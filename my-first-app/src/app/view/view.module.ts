import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ViewComponent],

  exports:[ViewComponent]

})
export class ViewModule { }
