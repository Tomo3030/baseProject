import { SharedModule } from "./../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginRoutingModule } from "./login-routing.module";
import { LoginLandingComponent } from "./login-landing/login-landing.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

@NgModule({
  declarations: [LoginLandingComponent, LoginComponent, SignUpComponent],
  imports: [SharedModule, CommonModule, LoginRoutingModule]
})
export class LoginModule {}
