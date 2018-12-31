import { Component, OnInit } from '@angular/core';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  VkontakteLoginProvider
} from 'angular-6-social-login-v2';
import { MainAuthService } from 'src/app/services/main-auth.service';
import { Router } from '@angular/router';
import { fadeInOut, fadeInOutLong } from 'src/app/services/animations';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.css'],
  animations: [fadeInOutLong]
})
export class SocialLoginComponent implements OnInit {

  constructor(private mainAuthService: MainAuthService, private router: Router, private apiService: ApiService) { }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.mainAuthService.loginSocial(socialPlatformProvider).then(() => {
      this.apiService.registerUser(this.mainAuthService.user).subscribe(() => { });
      this.router.navigate(['home']);
    });
  }

  ngOnInit() {
  }

}
