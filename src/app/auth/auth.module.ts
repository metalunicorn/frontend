import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Auth2GuardService } from './auth2.guard.service';
import { authKey, authReducers } from '../store/reducers/auth.reducers';
import { AuthEffects } from '../store/effects/auth.effects';
import { httpInterceptorProviders } from '../http-interceptors';

export function tokenGetter() {
	return localStorage.getItem('access_token');
}

@NgModule({
	imports: [
		AuthRoutingModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatFormFieldModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		HttpClientModule,
		StoreModule.forFeature(authKey, authReducers),
		EffectsModule.forFeature([AuthEffects]),
		JwtModule.forRoot({
			config: {
				tokenGetter: tokenGetter,
				allowedDomains: ['http://localhost:3000'],
			},
		}),
	],
	declarations: [AuthComponent],
	providers: [AuthService, Auth2GuardService, httpInterceptorProviders],
})
export class AuthModule {}
