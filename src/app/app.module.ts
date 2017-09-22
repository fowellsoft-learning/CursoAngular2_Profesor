import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MyCoreModule, LoggerService } from '../my-core/index';
import { routes } from './app.rutes';

import { MisDatosService } from './services/mis-datos.service';
import { PersonasViewModelService, PersonasViewModelDAOService } from './personas/personas-view-model.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { SizerComponent } from './sizer/sizer.component';
import { PERSONAS_COMPONENT } from './personas/personas.component';
import { PersonasDAOService } from './personas/personas-dao.service';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemosComponent,
    CalculadoraComponent,
    SizerComponent,
    PERSONAS_COMPONENT,
    MenuComponent,
    PageNotFoundComponent,
    NotificationComponent,
   ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    RouterModule.forRoot(routes), MyCoreModule,
  ],
  providers: [ LoggerService, MisDatosService,
    {provide: PersonasViewModelService, useClass: PersonasViewModelDAOService},
    PersonasDAOService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
