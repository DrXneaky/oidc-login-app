import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private oauthService: OAuthService) {
  }

  public login() {
      this.oauthService.initLoginFlow();
  }

  public logoff() {
      this.oauthService.logOut();
  }

  get name() {
      const claims = this.oauthService.getIdentityClaims();
      if (!claims) return null;
      return "amiladi"; 
  }

  ngOnInit(): void {
    //this.oauthService.configure(authCodeFlowConfig);
    //this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

}
