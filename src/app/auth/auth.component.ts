import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginUser } from '../store/action/auth.actions';
import { selectErrorMessage } from '../store/selectors';
import { IAppState } from '../store/state/app.state';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
	hide = true;
	errorMessage: string | undefined;
	getState: Observable<any>;

	checkoutForm = this.formBuilder.group({
		login: [
			'',
			[
				Validators.required,
				Validators.maxLength(100),
				Validators.minLength(4),
				Validators.pattern('^[a-zA-Z0-9_.-]*$'),
			],
		],
		password: [
			'',
			[Validators.required, Validators.maxLength(100), Validators.minLength(4)],
		],
	});

	constructor(
		private formBuilder: FormBuilder,
		public router: Router,
		private store: Store<IAppState>
	) {
		this.getState = this.store.select(selectErrorMessage);
	}

	ngOnInit(): void {
		this.getState.subscribe((state) => {
			console.log(state);
			this.errorMessage = state;
		});
	}

	onSubmit(): void {
		this.store.dispatch(loginUser(this.checkoutForm.value));

		this.checkoutForm.reset();
	}
}
