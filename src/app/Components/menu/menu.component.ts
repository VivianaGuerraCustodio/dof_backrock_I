import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  logoutUser(): void {
    this.authService
      .logoutUser()
      .then(() => {
        this.router.navigate(['inicio']);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
