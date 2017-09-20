import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MyCoreModule, LoggerService } from '../my-core/index';

import { MisDatosService } from './services/mis-datos.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { SizerComponent } from './sizer/sizer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemosComponent,
    CalculadoraComponent,
    SizerComponent,
   ],
  imports: [
    BrowserModule, FormsModule, MyCoreModule,
  ],
  providers: [ LoggerService, MisDatosService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
