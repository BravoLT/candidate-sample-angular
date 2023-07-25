import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {provideMockStore} from '@ngrx/store/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore()
      ],
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
