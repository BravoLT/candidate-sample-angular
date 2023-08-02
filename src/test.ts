// This file is required by karma.conf.js and loads recursively all the .spec and framework files
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// You don't need the require.context() block anymore.
// Instead, all the tests are included via the Angular CLI's default setup.

// If you have specific test files you want to include, you can add them here.
// For example:
// import './app/components/some-component.spec.ts';
// import './app/services/some-service.spec.ts';
// ...

// Otherwise, the Angular CLI automatically includes all files ending with .spec.ts
// from your src/ folder.

// No need to map the context, as we are not using require.context() anymore.
// If you had specific imports above, make sure you import all the necessary test files.

// Note: If you have a very large application and a significant number of tests,
// you can still use require.context(), but it's not typically required for most projects.
