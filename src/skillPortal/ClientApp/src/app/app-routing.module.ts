import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { FilesComponent } from './components/files/files.component';
import { FileAddComponent } from './components/file-add/file-add.component';
import { TestAddComponent } from './components/test-add/test-add.component';
import { TestsComponent } from './components/tests/tests.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { RatingComponent } from './components/rating/rating.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SocialLoginComponent } from './components/social-login/social-login.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'login', component: SocialLoginComponent, data: { title: 'Login' } },
  { path: 'categories', component: CategoriesComponent, data: { title: 'Categories' } },
  { path: 'categories/add', component: CategoryAddComponent, canActivate: [AuthGuard], data: { title: 'Add category' } },
  {
    path: 'categories/:catId', component: CategoryDetailComponent, canActivate: [], data: { title: 'Add category' }, children: [
      { path: 'ratings', component: RatingComponent, canActivate: [], data: { title: 'Tests' } },
      { path: 'tests', component: TestsComponent, canActivate: [], data: { title: 'Tests' } },
      { path: 'tests/add', component: TestAddComponent, canActivate: [AuthGuard], data: { title: 'Test add' } },
      { path: 'files', component: FilesComponent, canActivate: [], data: { title: 'Files' } },
      { path: 'files/add', component: FileAddComponent, canActivate: [AuthGuard], data: { title: 'File add' } },
      { path: 'overview', component: OverviewComponent, canActivate: [], data: { title: 'Tests' } },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
    ]
  },
  { path: 'settings', component: SettingsComponent, canActivate: [], data: { title: 'Settings' } },
  { path: 'about', component: AboutComponent, data: { title: 'About Us' } },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, data: { title: 'Page Not Found' } }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService, AuthGuard]
})
export class AppRoutingModule { }
