import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
// import {Router} from './login/login.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [RouterModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
