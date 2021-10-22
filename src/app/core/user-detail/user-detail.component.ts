import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUsers } from 'src/app/store/selectors';
import { IAppState } from 'src/app/store/state/app.state';

@Component({
	selector: 'app-user-detail',
	templateUrl: './user-detail.component.html',
	styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
	getState: Observable<any>;
	users: any | undefined;

	constructor(private store: Store<IAppState>) {
		this.getState = this.store.select(selectUsers);
	}

	ngOnInit(): void {
		this.getState.subscribe((state) => {
			this.users = state;
		});
	}
}
