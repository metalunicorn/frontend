import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
	selector: "app-auth",
	templateUrl: "./auth.component.html",
	styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit {
	hide = true;

	checkoutForm = this.formBuilder.group({
		login: "",
		password: "",
	});

	constructor(
		private formBuilder: FormBuilder,
		private authService: AuthService
	) {}

	onSubmit(): void {
		this.authService.login(this.checkoutForm.value);
		this.checkoutForm.reset();
	}

	ngOnInit(): void {}
}
