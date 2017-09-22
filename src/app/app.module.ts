import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyCoreModule, LoggerService } from '../my-core/index';

import { MisDatosService } from './services/mis-datos.service';
import { PersonasViewModelService, PersonasViewModelDAOService } from './personas/personas-view-model.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { SizerComponent } from './sizer/sizer.component';
import { PERSONAS_COMPONENT } from './personas/personas.component';
import { PersonasDAOService } from './personas/personas-dao.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemosComponent,
    CalculadoraComponent,
    SizerComponent,
    PERSONAS_COMPONENT,
   ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, MyCoreModule,
  ],
  providers: [ LoggerService, MisDatosService,
    {provide: PersonasViewModelService, useClass: PersonasViewModelDAOService},
    PersonasDAOService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
