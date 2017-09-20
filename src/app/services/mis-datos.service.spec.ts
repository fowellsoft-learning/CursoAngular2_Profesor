import { TestBed, inject } from '@angular/core/testing';

import { MisDatosService } from './mis-datos.service';

describe('MisDatosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MisDatosService]
    });
  });

  it('should be created', inject([MisDatosService], (service: MisDatosService) => {
    expect(service).toBeTruthy();
  }));
});
