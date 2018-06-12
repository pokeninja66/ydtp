import {NgModule} from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';

import {FakeComponent} from './pages/fake/fake.component';
import {RegisterComponent} from './pages/user/register/register.component';
import {LoginComponent} from './pages/user/login/login.component';
import {LogoutComponent} from './pages/user/logout/logout.component';
import {UploadComponent} from './pages/user/upload/upload.component';
import {AuthGuard} from './services/auth.guard';
import {HomeComponent} from './pages/home/home.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {AboutComponent} from './pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'about',
    component: AboutComponent,

  },
  {
    path: 'fake',
    component: FakeComponent,

  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'upload',
    component: UploadComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
