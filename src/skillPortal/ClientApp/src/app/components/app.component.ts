import { filter } from 'rxjs/operators';
import { SearchService } from './../services/search.service';
import { Component, ViewEncapsulation, OnInit, OnDestroy, ViewChildren, AfterViewInit, QueryList, ElementRef } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ToastaService, ToastaConfig, ToastOptions, ToastData } from 'ngx-toasta';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { AlertService, AlertDialog, DialogType, AlertMessage, MessageSeverity } from '../services/alert.service';
import { NotificationService } from '../services/notification.service';
import { AppTranslationService } from '../services/app-translation.service';
import { AccountService } from '../services/account.service';
import { LocalStoreManager } from '../services/local-store-manager.service';
import { AppTitleService } from '../services/app-title.service';
import { ConfigurationService } from '../services/configuration.service';
import { Permission } from '../models/permission.model';
import { LoginComponent } from '../components/login/login.component';
import { AuthService, SocialUser } from 'angular-6-social-login-v2';
import { MainAuthService } from '../services/main-auth.service';

const alertify: any = require('../assets/scripts/alertify.js');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

  public selectedLanguage: string;
  public isUserLoggedIn: boolean;
  public user: SocialUser;
  shouldShowLoginModal: boolean;
  newNotificationCount = 0;
  appTitle = 'Skill portal';
  appLogo = require('../assets/images/logo-white.png');
  searchValue: string;
  public currentRoute: string;

  stickyToasties: number[] = [];

  dataLoadingConsecutiveFailurs = 0;
  notificationsLoadingSubscription: any;

  @ViewChildren('loginModal,loginControl')
  modalLoginControls: QueryList<any>;

  loginModal: ModalDirective;
  loginControl: LoginComponent;


  get notificationsTitle() {

    const gT = (key: string) => this.translationService.getTranslation(key);

    if (this.newNotificationCount) {
      return `${gT('app.Notifications')} (${this.newNotificationCount} ${gT('app.New')})`;
    } else {
      return gT('app.Notifications');
    }
  }


  constructor(storageManager: LocalStoreManager, private toastaService: ToastaService, private toastaConfig: ToastaConfig,
    private accountService: AccountService, private alertService: AlertService, private notificationService: NotificationService,
    private appTitleService: AppTitleService, private authService: MainAuthService, private translationService: AppTranslationService,
    public configurations: ConfigurationService, public router: Router, private searchService: SearchService,
    public route: ActivatedRoute) {

    this.user = this.authService.getUser();
    this.isUserLoggedIn = this.authService.isLoggedIn();

    storageManager.initialiseStorageSyncListener();
    /*this.translateService.setDefaultLang('sk');
    this.changeLanguage('sk');
    console.log(this.translateService.currentLang)*/


    this.toastaConfig.theme = 'bootstrap';
    this.toastaConfig.position = 'top-right';
    this.toastaConfig.limit = 100;
    this.toastaConfig.showClose = true;

    this.appTitleService.appName = this.appTitle;
    this.searchService.subject.subscribe((substring: string) => {
      this.searchValue = substring;
    });
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => { this.currentRoute = event.url; });
  }


  ngAfterViewInit() {

    this.modalLoginControls.changes.subscribe((controls: QueryList<any>) => {
      controls.forEach(control => {
        if (control) {
          if (control instanceof LoginComponent) {
            this.loginControl = control;
            this.loginControl.modalClosedCallback = () => this.loginModal.hide();
          } else {
            this.loginModal = control;
            this.loginModal.show();
          }
        }
      });
    });
  }


  onLoginModalShown() {
    this.alertService.showStickyMessage('Session Expired', 'Your Session has expired. Please log in again', MessageSeverity.info);
  }


  onLoginModalHidden() {
    this.alertService.resetStickyMessage();
    this.loginControl.reset();
    this.shouldShowLoginModal = false;

    // if (this.authService.isSessionExpired) {
    //   this.alertService
    //   .showStickyMessage('Session Expired', 'Your Session has expired. Please log in again to renew your session', MessageSeverity.warn);
    // }
  }

  changeLanguage(lang) {
    this.translationService.changeLanguage(lang);
    this.selectedLanguage = this.translationService.getCurrentLanguage();
  }

  onLoginModalHide() {
    this.alertService.resetStickyMessage();
  }


  ngOnInit() {

    // setTimeout(() => {
    //   if (this.isUserLoggedIn) {
    //     this.alertService.resetStickyMessage();

    //     // if (!this.authService.isSessionExpired)
    //     this.alertService.showMessage('Login', `Welcome back ${this.userName}!`, MessageSeverity.default);
    //     // else
    //     //    this.alertService.showStickyMessage('Session Expired', 'Your Session has expired. Please log in again', MessageSeverity.warn);
    //   }
    // }, 2000);


    this.alertService.getDialogEvent().subscribe(alert => this.showDialog(alert));
    this.alertService.getMessageEvent().subscribe(message => this.showToast(message, false));
    this.alertService.getStickyMessageEvent().subscribe(message => this.showToast(message, true));

    // this.authService.reLoginDelegate = () => this.shouldShowLoginModal = true;

    this.authService.socialAuthState().subscribe(socialUser => {
      this.user = socialUser;
      if (socialUser == null) {
        this.isUserLoggedIn = false;
      } else {
        this.isUserLoggedIn = true;
      }


      // if (this.isUserLoggedIn) {
      //   this.initNotificationsLoading();
      // } else {
      //   this.unsubscribeNotifications();
      // }

      // setTimeout(() => {
      //   if (!this.isUserLoggedIn) {
      //     this.alertService.showMessage('Session Ended!', '', MessageSeverity.default);
      //   }
      // }, 500);
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        const url = (<NavigationStart>event).url;

        if (url !== url.toLowerCase()) {
          this.router.navigateByUrl((<NavigationStart>event).url.toLowerCase());
        }
      }
    });

    this.changeLanguage('sk');
  }


  onSearch(searchValue: string) {
    this.searchService.subject.next(searchValue);
  }



  private unsubscribeNotifications() {
    if (this.notificationsLoadingSubscription) {
      this.notificationsLoadingSubscription.unsubscribe();
    }
  }



  initNotificationsLoading() {

    this.notificationsLoadingSubscription = this.notificationService.getNewNotificationsPeriodically()
      .subscribe(notifications => {
        this.dataLoadingConsecutiveFailurs = 0;
        this.newNotificationCount = notifications.filter(n => !n.isRead).length;
      },
        error => {
          this.alertService.logError(error);

          if (this.dataLoadingConsecutiveFailurs++ < 20) {
            setTimeout(() => this.initNotificationsLoading(), 5000);
          } else {
            this.alertService.showStickyMessage('Load Error', 'Loading new notifications from the server failed!', MessageSeverity.error);
          }
        });
  }


  markNotificationsAsRead() {

    const recentNotifications = this.notificationService.recentNotifications;

    if (recentNotifications.length) {
      this.notificationService.readUnreadNotification(recentNotifications.map(n => n.id), true)
        .subscribe(response => {
          for (const n of recentNotifications) {
            n.isRead = true;
          }

          this.newNotificationCount = recentNotifications.filter(n => !n.isRead).length;
        },
          error => {
            this.alertService.logError(error);
            this.alertService.showMessage('Notification Error', 'Marking read notifications failed', MessageSeverity.error);

          });
    }
  }



  showDialog(dialog: AlertDialog) {

    alertify.set({
      labels: {
        ok: dialog.okLabel || 'OK',
        cancel: dialog.cancelLabel || 'Cancel'
      }
    });

    switch (dialog.type) {
      case DialogType.alert:
        alertify.alert(dialog.message);
        break;
      case DialogType.confirm:
        alertify
          .confirm(dialog.message, (e) => {
            if (e) {
              dialog.okCallback();
            } else {
              if (dialog.cancelCallback) {
                dialog.cancelCallback();
              }
            }
          });

        break;
      case DialogType.prompt:
        alertify
          .prompt(dialog.message, (e, val) => {
            if (e) {
              dialog.okCallback(val);
            } else {
              if (dialog.cancelCallback) {
                dialog.cancelCallback();
              }
            }
          }, dialog.defaultValue);

        break;
    }
  }





  showToast(message: AlertMessage, isSticky: boolean) {

    if (message == null) {
      for (const id of this.stickyToasties.slice(0)) {
        this.toastaService.clear(id);
      }

      return;
    }

    const toastOptions: ToastOptions = {
      title: message.summary,
      msg: message.detail,
      timeout: isSticky ? 0 : 4000
    };


    if (isSticky) {
      toastOptions.onAdd = (toast: ToastData) => this.stickyToasties.push(toast.id);

      toastOptions.onRemove = (toast: ToastData) => {
        const index = this.stickyToasties.indexOf(toast.id, 0);

        if (index > -1) {
          this.stickyToasties.splice(index, 1);
        }

        toast.onAdd = null;
        toast.onRemove = null;
      };
    }


    switch (message.severity) {
      case MessageSeverity.default: this.toastaService.default(toastOptions); break;
      case MessageSeverity.info: this.toastaService.info(toastOptions); break;
      case MessageSeverity.success: this.toastaService.success(toastOptions); break;
      case MessageSeverity.error: this.toastaService.error(toastOptions); break;
      case MessageSeverity.warn: this.toastaService.warning(toastOptions); break;
      case MessageSeverity.wait: this.toastaService.wait(toastOptions); break;
    }
  }





  logout() {
    this.authService.logout();
    this.router.navigate(['home']);
  }


  getYear() {
    return new Date().getUTCFullYear();
  }


  // get userName(): string {
  //   return this.authService. ? this.authService.currentUser.userName : '';
  // }


  // get fullName(): string {
  //   return this.authService.currentUser ? this.authService.currentUser.fullName : '';
  // }



  get canViewCustomers() {
    return this.accountService.userHasPermission(Permission.viewUsersPermission); // eg. viewCustomersPermission
  }

  get canViewProducts() {
    return this.accountService.userHasPermission(Permission.viewUsersPermission); // eg. viewProductsPermission
  }

  get canViewOrders() {
    return true; // eg. viewOrdersPermission
  }

  ngOnDestroy() {
    this.unsubscribeNotifications();
  }

}
