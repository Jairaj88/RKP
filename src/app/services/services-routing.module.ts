import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';
import { ServicesAuthResolver } from './services-auth-resolver.service';

const routes: Routes = [
  {
    path: 'service',
    component: ServicesComponent,
    resolve: {
      isAuthenticated: ServicesAuthResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule {}
