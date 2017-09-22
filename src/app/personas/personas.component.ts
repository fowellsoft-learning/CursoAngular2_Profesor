import { LoggerService } from './../../my-core/services/logger.service';
import { PersonasViewModelService } from './personas-view-model.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor(private vm: PersonasViewModelService,
    private log: LoggerService) { }

  public get VM() { return this.vm; }

  ngOnInit() {
    this.vm.list();
  }

}

@Component({
  selector: 'app-personas-list',
  templateUrl: './template-list.rutas.component.html',
})
export class PersonasListComponent implements OnInit {

  constructor(private vm: PersonasViewModelService,
    private log: LoggerService) { }

  public get VM() { return this.vm; }

  ngOnInit() {
    this.VM.list();
  }

}

@Component({
  selector: 'app-personas-add',
  templateUrl: './template-form.component.html',
})
export class PersonasAddComponent implements OnInit {

  constructor(private vm: PersonasViewModelService,
    private log: LoggerService) { }

  public get VM() { return this.vm; }

  ngOnInit() {
    this.vm.add();
  }

}

@Component({
  selector: 'app-personas-edit',
  templateUrl: './template-form.component.html',
})
export class PersonasEditComponent implements OnInit, OnDestroy {
  private obs: any;

  constructor(private vm: PersonasViewModelService,
    private log: LoggerService, private route: ActivatedRoute,
    private router: Router) { }

  public get VM() { return this.vm; }

  ngOnInit() {
    this.obs = this.route.params.subscribe(params => {
      const id = +params['id']; // (+) converts string 'id' to a number
      if (id) {
        this.vm.edit(id);
      } else {
        this.router.navigate(['/error']);
      }
    });
  }
  ngOnDestroy() {
    this.obs.unsubscribe();
  }
}

@Component({
  selector: 'app-personas-view',
  templateUrl: './template-view.component.html',
})
export class PersonasViewComponent implements OnInit, OnDestroy {
  private obs: any;

  constructor(private vm: PersonasViewModelService,
    private log: LoggerService, private route: ActivatedRoute,
    private router: Router) { }

  public get VM() { return this.vm; }

  ngOnInit() {
    /*
    let id = this.route.snapshot.params['id'];
    if (id) {
      this.vm.view(+id);
    } else {
      this.router.navigate(['/error']);
    }
    */
    this.obs = this.route.params.subscribe(params => {
      const id = +params['id']; // (+) converts string 'id' to a number
      if (id) {
        this.vm.edit(id);
      } else {
        this.router.navigate(['/error']);
      }
    });
  }
  ngOnDestroy() {
    this.obs.unsubscribe();
  }


}

export const PERSONAS_COMPONENT = [PersonasComponent, PersonasListComponent, PersonasAddComponent,
  PersonasEditComponent, PersonasViewComponent];
