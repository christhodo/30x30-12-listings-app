import { Component } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { shareReplay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'listing-app';
  links = [
    { path: '/login', icon: 'vpn_key', title: 'Login' },
    { path: '/listings', icon: 'view_list', title: 'Listings' },
  ];

  constructor(private authService: AuthService) {}
}
