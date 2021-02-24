import { InjectionToken } from '@angular/core';

export const elementsBundleInfoToken = new InjectionToken<{
    version: string;
    name: string;
}>('elements-bundle-info-token');