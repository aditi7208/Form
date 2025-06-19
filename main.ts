import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


import { provideRouter } from '@angular/router';

import { AuthComponent } from './app/auth/auth.component';
import { SignupComponent } from './app/auth/signup/signup.component';
import { LoginComponent } from './app/auth/login/login.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: 'auth',
        component: AuthComponent,
        children: [
          { path: 'signup', component: SignupComponent },
          { path: 'login', component: LoginComponent },
        ]
      },
      { path: '', redirectTo: 'auth/signup', pathMatch: 'full' },
    ])
  ]
});
