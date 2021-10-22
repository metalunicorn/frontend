import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuardService } from './auth/auth.guard.service';
import { CoreModule } from './core/core.module';
import { appReducers } from './store/reducers/app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { UserDetailComponent } from './core/user-detail/user-detail.component';
import { httpInterceptorProviders } from './http-interceptors';

export function tokenGetter() {
	return localStorage.getItem('access_token');
}

@NgModule({
	declarations: [AppComponent, UserDetailComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		StoreModule.forRoot({}),
		StoreDevtoolsModule.instrument({
			maxAge: 25, // Retains last 25 states
			logOnly: environment.production, // Restrict extension to log-only mode
			autoPause: true, // Pauses recording actions and state changes when the extension window is not open
		}),
		CoreModule,
		AuthModule,
		BrowserAnimationsModule,
		EffectsModule.forRoot([]),
		JwtModule.forRoot({
			config: {
				tokenGetter: tokenGetter,
				allowedDomains: ['http://localhost:3000'],
			},
		}),
	],
	providers: [AuthGuardService, httpInterceptorProviders],
	bootstrap: [AppComponent],
})
export class AppModule {}
