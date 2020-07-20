import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { AdminAddComponent } from './components/admin-add/admin-add.component';
import{LoginComponent} from './components/login/login.component';
import { AdminLoginComponent } from './components/AdminLogin/AdminLogin.component';
import { AdminComponent } from './admin/admin.component';
import { UniversitiesComponent } from './universities/universities.component';

// this constant default routes to Home, and also send all unknown path to Home
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'admin-add', component: AdminAddComponent },
 {path:'login', component:LoginComponent},
 {path: 'adminlogin', component:AdminLoginComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'universities', component: UniversitiesComponent },
 
  // default route
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
