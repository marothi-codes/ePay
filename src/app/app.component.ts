import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { SidenavService } from './layout/sidenav/sidenav.service';
import { ThemeService } from '../@fury/services/theme.service';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Platform } from '@angular/cdk/platform';
import { SplashScreenService } from '../@fury/services/splash-screen.service';

@Component({
  selector: 'fury-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(
    private sidenavService: SidenavService,
    private iconRegistry: MatIconRegistry,
    private renderer: Renderer2,
    private themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document,
    private platform: Platform,
    private route: ActivatedRoute,
    private splashScreenService: SplashScreenService
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
      {
        name: 'Transactions',
        routeOrFunction: '/tables/all-in-one-table',
        icon: 'assignment',
        // badge: '22', // TODO: Pull transactions qty from backend service.
        // badgeColor: '#D86281',
        position: 15,
      },
      {
        name: 'Accounts',
        routeOrFunction: '/apps/calendar',
        icon: 'account_balance',
        position: 20,
      },
      // {
      //   name: 'Statements',
      //   routeOrFunction: '/apps/inbox',
      //   icon: 'inbox',
      //   position: 25,
      // },
      {
        name: 'Payouts',
        routeOrFunction: '/payouts',
        icon: 'attach_money',
        position: 30,
      },
      {
        name: 'PAYMENT SETTINGS',
        type: 'subheading',
        position: 35,
      },
      // {
      //   name: "Authentication",
      //   icon: "lock",
      //   position: 40,
      //   subItems: [
      //     {
      //       name: "Login Page",
      //       routeOrFunction: "/login",
      //       position: 5,
      //     },
      //     {
      //       name: "Register Page",
      //       routeOrFunction: "/register",
      //       position: 10,
      //     },
      //     {
      //       name: "Forgot Password",
      //       routeOrFunction: "/forgot-password",
      //       position: 15,
      //     },
      //   ],
      // },
      // {
      //   name: "Page Layouts",
      //   icon: "view_compact",
      //   position: 45,
      //   subItems: [
      //     {
      //       name: "Simple",
      //       routeOrFunction: "/page-layouts/simple",
      //       position: 5,
      //     },
      //     {
      //       name: "Simple Tabbed",
      //       routeOrFunction: "/page-layouts/simple-tabbed",
      //       position: 5,
      //     },
      //     {
      //       name: "Card",
      //       routeOrFunction: "/page-layouts/card",
      //       position: 10,
      //     },
      //     {
      //       name: "Card Tabbed",
      //       routeOrFunction: "/page-layouts/card-tabbed",
      //       position: 15,
      //     },
      //   ],
      //   badge: "4",
      //   badgeColor: "#4CAF50",
      // },
      {
        name: 'Payment Methods',
        routeOrFunction: '/payment-methods',
        icon: 'credit_card',
        position: 50,
      },
      {
        name: 'Recurring Billing',
        routeOrFunction: '/recurring-billing',
        icon: 'card_membership',
        position: 55,
      },
    ]);
  }
}
