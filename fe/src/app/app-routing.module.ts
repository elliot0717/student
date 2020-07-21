import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { AdminComponent } from './admin/admin.component';
import { UniversitiesComponent } from './universities/universities.component';
import { MedicineComponent } from './medicine/medicine.component';
import { SportsComponent } from './sports/sports.component';
import { FarmingComponent } from './farming/farming.component';
import { LawComponent } from './law/law.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { CommerceComponent } from './commerce/commerce.component';

// this constant default routes to Home, and also send all unknown path to Home
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'test', component: TestComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'universities', component: UniversitiesComponent },
  { path: 'medicine', component: MedicineComponent},
  { path: 'sports', component: SportsComponent},
  { path: 'farming', component: FarmingComponent},
  { path: 'law', component: LawComponent},
  { path: 'engineering', component: EngineeringComponent},
  { path: 'commerce', component: CommerceComponent},


 
  // default route
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
