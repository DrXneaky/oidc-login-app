import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';
import { AppComponent} from '../app.component';

@Injectable()
export class Interceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url == 'https://iam-cnam-test.francecentral.cloudapp.azure.com:8443/api/authentication/bf290ee5-ff49-454d-9d8a-ddb69e542401?tenant=t1') {
        const new_request = new HttpRequest('GET', request.url);
        const customReq = request.clone({});
        const customReqReplace = new_request.clone({
            setParams: {
                'grant_type': 'authorization_code',
                'client_id': 'myRP',
                'redirect_uri': 'http://iam-cnam-app2.francecentral.cloudapp.azure.com',
                'client_secret': 'myRP',
                'code': request.body.get('code')
            },
        });
        return next.handle(customReqReplace);
    } else return next.handle(request);
    }
}