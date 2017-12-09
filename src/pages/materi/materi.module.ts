import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MateriPage } from './materi';

@NgModule({
  declarations: [
    MateriPage,
  ],
  imports: [
    IonicPageModule.forChild(MateriPage),
  ],
  exports :[
    MateriPage
  ],
})
export class MateriPageModule {}
