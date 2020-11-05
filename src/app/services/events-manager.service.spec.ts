/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventsManagerService } from './events-manager.service';

describe('Service: EventsManager', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventsManagerService]
    });
  });

  it('should ...', inject([EventsManagerService], (service: EventsManagerService) => {
    expect(service).toBeTruthy();
  }));
});
