import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	constructor() {}

	login(login: { login: string; password: string }) {
		console.log(login);
	}
}
