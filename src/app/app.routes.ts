import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewdesignComponent } from './components/newdesign/newdesign.component';
import { ProjectsDashboardComponent } from './components/projects-dashboard/projects-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'newdesign', component: NewdesignComponent },
  { path: 'projects', component: ProjectsDashboardComponent },
];
