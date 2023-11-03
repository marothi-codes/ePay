import {DOCUMENT} from '@angular/common';
import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {SidenavService} from './layout/sidenav/sidenav.service';
import {ThemeService} from '../@fury/services/theme.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {Platform} from '@angular/cdk/platform';
import {SplashScreenService} from '../@fury/services/splash-screen.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'fury-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private sidenavService: SidenavService,
    private iconRegistry: MatIconRegistry,
    private renderer: Renderer2,
    private themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document,
    private platform: Platform,
    private route: ActivatedRoute,
    private splashScreenService: SplashScreenService,
    private router: Router,
    private titleService: Title
  ) {
    this.route.queryParamMap
      .pipe(filter((queryParamMap) => queryParamMap.has('style')))
      .subscribe((queryParamMap) =>
        this.themeService.setStyle(queryParamMap.get('style'))
      );

    this.iconRegistry.setDefaultFontSetClass('material-icons-outlined');
    this.themeService.theme$.subscribe((theme) => {
      if (theme[0]) {
        this.renderer.removeClass(this.document.body, theme[0]);
      }

      this.renderer.addClass(this.document.body, theme[1]);
    });

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }

    // Add navigation items to sidebar.
    this.sidenavService.addItems([
      {
        name: 'YOUR ACCOUNT',
        position: 5,
        type: 'subheading',
        customClass: 'first-subheading',
      },
      {
        name: 'Dashboard',
        routeOrFunction: '/',
        icon: 'dashboard',
        position: 10,
        pathMatchExact: true,
      },
      // {
      //   name: 'Transactions',
      //   routeOrFunction: '/transactions',
      //   icon: 'assignment',
      //   // badge: '22', // TODO: Pull transactions qty from backend service.
      //   // badgeColor: '#D86281',
      //   position: 15,
      // },
      {
        name: 'Accounts',
        routeOrFunction: '/accounts',
        icon: 'account_balance',
        position: 20,
      },
      {
        name: 'Payouts',
        routeOrFunction: '/payouts',
        icon: 'attach_money',
        position: 25,
      },
      {
        name: 'PAYMENT SETTINGS',
        type: 'subheading',
        position: 30,
      },
      {
        name: 'Payment Methods',
        routeOrFunction: '/payment-methods',
        icon: 'credit_card',
        position: 35,
      },
      {
        name: 'Business Profile',
        routeOrFunction: '/business/profile',
        icon: 'store',
        position: 40,
      },
    ]);
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route: ActivatedRoute = this.router.routerState.root;
          let routeTitle = '';
          while (route!.firstChild) {
            route = route.firstChild;
          }
          if (route.snapshot.data['title']) {
            routeTitle = `${route!.snapshot.data['title']} - ePay | Banking & Merchant Portal`;
          }
          return routeTitle + ' - ePay | Banking & Merchant Portal';
        })
      )
      .subscribe((title: string) => {
        if (title) {
          this.titleService.setTitle(title + ' - ePay | Banking & Merchant Portal');
        }
      });
  }
}
