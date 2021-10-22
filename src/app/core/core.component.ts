import {
	Component,
	NgZone,
	OnInit,
	AfterViewInit,
	ViewChild,
} from '@angular/core';
import { CoresService } from './core.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { getUsers } from '../store/action/user.actions';
import { selectTotalPage, selectUsers } from '../store/selectors';
import { Observable, timer } from 'rxjs';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { map, pairwise, filter, throttleTime } from 'rxjs/operators';

@Component({
	selector: 'app-core',
	templateUrl: './core.component.html',
	styleUrls: ['./core.component.css'],
})
export class CoreComponent implements OnInit, AfterViewInit {
	@ViewChild('scroller') scroller: CdkVirtualScrollViewport | any;
	getUsers: Observable<any>;
	getTotalPage: Observable<any>;
	users: any | undefined;
	loading = false;
	page = 1;
	totalPage: any;

	constructor(private store: Store<IAppState>, private ngZone: NgZone) {
		this.getUsers = this.store.select(selectUsers);
		this.getTotalPage = this.store.select(selectTotalPage);
	}

	ngOnInit(): void {
		this.store.dispatch(getUsers({ page: this.page }));
		this.getUsers.subscribe((state) => {
			console.log(state, '1');
			this.users = state;
		});
	}

	ngAfterViewInit() {
		this.scroller
			.elementScrolled()
			.pipe(
				map(() => this.scroller.measureScrollOffset('bottom')),
				pairwise(),
				filter(([y1, y2]) => y2 < y1 && y2 < 140),
				throttleTime(200)
			)
			.subscribe(() => {
				this.ngZone.run(() => {
					this.getTotalPage.subscribe((state) => {
						this.totalPage = state;
					});
					this.loading = true;
					timer(1000).subscribe(() => {
						this.fetchMore();
					});
				});
			});
	}

	fetchMore(): void {
		this.loading = false;
		console.log(this.totalPage);
		if (this.totalPage > this.page) {
			console.log(this.totalPage);
			this.store.dispatch(getUsers({ page: this.page++ + 1 }));
		}
	}
}
