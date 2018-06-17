import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsComponent } from './events.component';
import { EventsResolver } from './events-resolver.services';
import { AuthGuard } from '../core';
import { SharedModule } from '../shared';
import { EventsRoutingModule } from './events-routing-module';

@NgModule({
  imports: [SharedModule, EventsRoutingModule],
  declarations: [EventsComponent],
  providers: [EventsResolver]
})
export class EventsModule {}
