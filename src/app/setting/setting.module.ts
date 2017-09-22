import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting/setting.component';

export const routes: Routes = [
    { path: '', component: SettingComponent },
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),
  ],
  declarations: [SettingComponent]
})
export class SettingModule { }
