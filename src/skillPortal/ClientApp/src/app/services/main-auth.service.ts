import { Injectable } from '@angular/core';
import { AuthService, SocialUser } from 'angular-6-social-login-v2';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainAuthService {
  public user: SocialUser;

  constructor(private socialAuthService: AuthService) {
    const userData = localStorage.getItem('auth_user');
    this.user = (userData === null) ? null : JSON.parse(userData);
  }


  loginSocial(providerId): Promise<void> {
    return this.socialAuthService.signIn(providerId).then(
      (userData) => {

        localStorage.setItem('auth_provider', providerId);
        localStorage.setItem('auth_user', JSON.stringify(userData));
        console.log('social sign in data : ', userData);
        // Now sign-in with userData
        // ...

      }
    );
  }

  public socialAuthState(): Observable<SocialUser> {
    return this.socialAuthService.authState.pipe(
      map(userData => {
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
