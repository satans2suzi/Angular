import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  logOut(): void {
    this.authService.logout()
      .subscribe(
        value => {
          return this.router.navigate(['/login']);
        }
      );

  }
}
