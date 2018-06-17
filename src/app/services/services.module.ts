import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ServicesComponent } from './services.component';
import { ServicesAuthResolver } from './services-auth-resolver.service';
import { SharedModule } from '../shared';
import { ServicesRoutingModule } from './services-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ServicesRoutingModule
  ],
  declarations: [
    ServicesComponent
  ],
  providers: [
    ServicesAuthResolver
  ]
})
export class ServicesModule {}
