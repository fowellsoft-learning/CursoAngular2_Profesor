import { LoggerService } from './../../my-core/services/logger.service';
import { PersonasViewModelService } from './personas-view-model.service';
import { Component, OnInit } from '@angular/core';

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
  templateUrl: './template-list.component.html',
})
export class PersonasListComponent implements OnInit {

  constructor(private vm: PersonasViewModelService,
    private log: LoggerService) { }

  public get VM() { return this.vm; }

  ngOnInit() {
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
  }

}

@Component({
  selector: 'app-personas-edit',
  templateUrl: './template-form.component.html',
})
export class PersonasEditComponent implements OnInit {

  constructor(private vm: PersonasViewModelService,
    private log: LoggerService) { }

  public get VM() { return this.vm; }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-personas-view',
  templateUrl: './template-view.component.html',
})
export class PersonasViewComponent implements OnInit {

  constructor(private vm: PersonasViewModelService,
    private log: LoggerService) { }

  public get VM() { return this.vm; }

  ngOnInit() {
  }

}

export const PERSONAS_COMPONENT = [PersonasComponent, PersonasListComponent, PersonasAddComponent,
  PersonasEditComponent, PersonasViewComponent];
