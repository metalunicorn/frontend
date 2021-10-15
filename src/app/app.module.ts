import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { AuthModule } from "./auth/auth.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		StoreModule.forRoot({}, {}),
		AuthModule,
		BrowserAnimationsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
