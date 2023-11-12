import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserGuard } from './guards/user-guard';

export const routes: Routes = [
	{ path: '', component: HomeComponent, canActivate: [UserGuard] },
	{ path: 'login', component: LoginComponent },
	{ path: 'home', component: HomeComponent, canActivate: [UserGuard] },
];
