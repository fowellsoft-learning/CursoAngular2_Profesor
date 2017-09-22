import { TestBed, inject } from '@angular/core/testing';

import { PersonasDaoService } from './personas-dao.service';

describe('PersonasDaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonasDaoService]
    });
  });

  it('should be created', inject([PersonasDaoService], (service: PersonasDaoService) => {
    expect(service).toBeTruthy();
  }));
});
