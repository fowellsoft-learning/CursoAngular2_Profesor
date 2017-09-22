import { AuthService } from './services/interceptores.service';
import { Injectable } from '@angular/core';
import { Routes, CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, Route, Router } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { SizerComponent } from './sizer/sizer.component';
import { PersonasComponent, PersonasListComponent, PersonasAddComponent,
    PersonasEditComponent, PersonasViewComponent } from './personas/personas.component';
import { PersonasDAOService } from './personas/personas-dao.service';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NotificationComponent } from './notification/notification.component';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.authService.isAutenticated;
  }
  canLoad(route: Route) {
    return this.authService.isAutenticated;
  }
}


export const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'demos', component: DemosComponent },
    { path: 'chisme/de/calcular', component: CalculadoraComponent },
    { path: 'personas', component: PersonasListComponent },
    { path: 'personas/add', component: PersonasAddComponent },
    { path: 'personas/:id', component: PersonasViewComponent },
    { path: 'personas/:id/edit', component: PersonasEditComponent },
    { path: 'personas/:id/:kk', component: PersonasViewComponent },
    { path: 'pepito/grillo', redirectTo: '/personas/2' },
    { path: 'clientes', children: [
        { path: '', component: PersonasListComponent },
        { path: 'add', component: PersonasAddComponent },
        { path: ':id', component: PersonasViewComponent },
        { path: ':id/edit', component: PersonasEditComponent },
    ] },
    { path: 'admin', loadChildren: 'app/admin/admin.module#AdminModule' },
    { path: 'setting', loadChildren: 'app/setting/setting.module#SettingModule' },
    { path: '**', component: PageNotFoundComponent },
  ];
