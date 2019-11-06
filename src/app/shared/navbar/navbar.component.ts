import { Component, OnInit } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay, switchMap } from "rxjs/operators";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  user$;
  authstate$;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver //private afAuth: AngularFireAuth
  ) {}

  async ngOnInit() {
    // this.user$ = this.afAuth.authState;
    // this.authstate$ = this.afAuth.authState.pipe(
    //   switchMap(authstate => {
    //     if (authstate) return authstate.getIdTokenResult();
    //     return of(null);
    //   })
    // );
  }

  signOut() {
    // this.afAuth.auth.signOut();
    // this.router.navigateByUrl("/");
  }
}
