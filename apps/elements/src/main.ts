import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { elementsBundleInfoToken } from '@elements-lib';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { version, name  } from '../package.json';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([
  { provide: elementsBundleInfoToken, useValue: { version, name }}
])
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
