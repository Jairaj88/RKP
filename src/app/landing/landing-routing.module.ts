import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { LandingAuthResolver } from './landing-auth-resolver.service';
//import { LandingAuthResolver } from './landing-auth-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    resolve: {
      isAuthenticated: LandingAuthResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {}
