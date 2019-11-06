import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { UserService } from "../user.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"]
})
export class SignUpComponent implements OnInit {
  form;
  serverMessage;
  @Output() toggle = new EventEmitter();
  @Output() toggleLoading = new EventEmitter();

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.minLength(6), Validators.required]],
      confirm: ["", []]
    });
  }

  get email() {
    return this.form.get("email");
  }
  get password() {
    return this.form.get("password");
  }
  get name() {
    return this.form.get("name");
  }

  get confirm() {
    return this.form.get("confirm");
  }

  onSubmit() {
    this.toggleLoading.emit();
    this.userService
      .createUser(this.email.value, this.password.value, this.name.value)
      .then(() => {
        this.toggleLoading.emit();
      })
      .catch(error => {
        this.toggleLoading.emit();
        this.serverMessage = error;
      });
  }

  toggleLanding() {
    this.toggle.emit();
  }

  get passwordDoesMatch() {
    return this.password.value === this.confirm.value;
  }
}
