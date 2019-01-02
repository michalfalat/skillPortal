import { Injectable, forwardRef, Inject } from '@angular/core';
import { AuthService, SocialUser } from 'angular-6-social-login-v2';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MainAuthService {
  public user: SocialUser;

  constructor(private socialAuthService: AuthService, /*private apiService: ApiService*/) {
    const userData = localStorage.getItem('auth_user');
    this.user = (userData === null) ? null : JSON.parse(userData);
  }

  isLoggedIn() {
    const userData = localStorage.getItem('auth_user');
    this.user = (userData === null) ? null : JSON.parse(userData);
    return this.user !== null ? true : false;
  }

  getUser() {
    const userData = localStorage.getItem('auth_user');
    this.user = (userData === null) ? null : JSON.parse(userData);
    return this.user;
  }

  loginSocial(providerId): Promise<void> {
    return this.socialAuthService.signIn(providerId).then(
      (userData) => {

        localStorage.setItem('auth_provider', providerId);
        localStorage.setItem('auth_user', JSON.stringify(userData));
        console.log('social sign in data : ', userData);
        if (userData !== null) {
          // this.apiService.registerUser(userData).subscribe(() => { });
        }
        // Now sign-in with userData
        // ...

      }
    );
  }

  public socialAuthState(): Observable<SocialUser> {
    return this.socialAuthService.authState.pipe(
      map(userData => {
        console.log('change');
        this.user = userData;
        return userData;
      }));
  }

  logout() {
    this.user = null;
    localStorage.removeItem('auth_provider');
    localStorage.removeItem('auth_user');
    this.socialAuthService.signOut();
  }
}
