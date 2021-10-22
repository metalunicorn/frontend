import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';
import { AuthGuardService as AuthGuard } from '../auth/auth.guard.service';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes = [
	{
		path: 'home',
		component: CoreComponent,
		canActivate: [AuthGuard],
	},
	{
		path: 'home/:id',
		component: UserDetailComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CoreRoutingModule {}
