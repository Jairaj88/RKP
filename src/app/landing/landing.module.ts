import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';
import { LandingAuthResolver } from './landing-auth-resolver.service';
import { SharedModule } from '../shared';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  imports: [
    SharedModule,
    LandingRoutingModule
  ],
  declarations: [
    LandingComponent
  ],
  providers: [
    LandingAuthResolver
  ]
})
export class LandingModule {}
