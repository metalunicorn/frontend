import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core-routing.module';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { userKey, userReducers } from '../store/reducers/user.reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../store/effects/user.effects';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { httpInterceptorProviders } from '../http-interceptors';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
	declarations: [CoreComponent],
	imports: [
		CommonModule,
		CoreRoutingModule,
		StoreModule.forFeature(userKey, userReducers),
		MatListModule,
		MatTableModule,
		BrowserModule,
		MatDividerModule,
		HttpClientModule,
		MatProgressSpinnerModule,
		ScrollingModule,
		EffectsModule.forFeature([UserEffects]),
		EffectsModule.forRoot([]),
	],
	providers: [httpInterceptorProviders],
})
export class CoreModule {}
