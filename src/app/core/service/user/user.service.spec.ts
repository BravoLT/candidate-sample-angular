import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {HttpClient} from '@angular/common/http';

describe('UserService', () => {
  let service: UserService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    TestBed.configureTestingModule({
      providers: [
        UserService,
        {provide: HttpClient, useValue: httpClientSpy},
      ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
