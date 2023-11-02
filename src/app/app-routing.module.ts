import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/authentication/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/authentication/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import(
        './pages/authentication/forgot-password/forgot-password.module'
      ).then((m) => m.ForgotPasswordModule),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
        pathMatch: 'full',
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./pages/profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'payouts',
        loadChildren: () =>
          import('./pages/payouts/payouts.module').then((m) => m.PayoutsModule),
      },
      {
        path: 'payment-methods',
        loadChildren: () =>
          import('./pages/payment-methods/payment-methods.module').then((m) => m.PaymentMethodsModule),
      },
      {
        path: 'business/profile',
        loadChildren: () =>
          import('./pages/business-profile/business-profile.module').then(
            (m) => m.BusinessProfileModule
          ),
      },
      {
        path: 'accounts',
        loadChildren: () =>
          import('./pages/accounts/accounts.module').then((m) => m.AccountsModule),
      },
      {
        path: 'components',
        loadChildren: () =>
          import('./pages/components/components.module').then(
            (m) => m.ComponentsModule
          ),
      },
      {
        path: 'forms/form-elements',
        loadChildren: () =>
          import('./pages/forms/form-elements/form-elements.module').then(
            (m) => m.FormElementsModule
          ),
      },
      {
        path: 'forms/form-wizard',
        loadChildren: () =>
          import('./pages/forms/form-wizard/form-wizard.module').then(
            (m) => m.FormWizardModule
          ),
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./pages/icons/icons.module').then((m) => m.IconsModule),
      },
      {
        path: 'page-layouts',
        loadChildren: () =>
          import('./pages/page-layouts/page-layouts.module').then(
            (m) => m.PageLayoutsModule
          ),
      },
      {
        path: 'transactions',
        loadChildren: () =>
          import(
            './pages/tables/all-in-one-table/all-in-one-table.module'
          ).then((m) => m.AllInOneTableModule),
      },
      {
        path: 'drag-and-drop',
        loadChildren: () =>
          import('./pages/drag-and-drop/drag-and-drop.module').then(
            (m) => m.DragAndDropModule
          ),
      },
      {
        path: 'editor',
        loadChildren: () =>
          import('./pages/editor/editor.module').then((m) => m.EditorModule),
      },
      {
        path: 'blank',
        loadChildren: () =>
          import('./pages/blank/blank.module').then((m) => m.BlankModule),
      },
      {
        path: 'level1/level2/level3/level4/level5',
        loadChildren: () =>
          import('./pages/level5/level5.module').then((m) => m.Level5Module),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledNonBlocking',
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    // relativeLinkResolution: 'legacy'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
