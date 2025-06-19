import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { AuthComponent } from './auth/auth.component';
// import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Forms';
}
