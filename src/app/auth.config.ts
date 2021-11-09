import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://iam-cnam-test.francecentral.cloudapp.azure.com:8443/t1',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin,

  // The SPA's id. The SPA is registered with this id at the auth-server
  clientId: 'myRP',
  responseType: 'code',
  dummyClientSecret: 'myRP',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid',
  strictDiscoveryDocumentValidation: false,
  showDebugInformation: true,
  disablePKCE: true,
  postLogoutRedirectUri: window.location.origin,
  requireHttps: false
}