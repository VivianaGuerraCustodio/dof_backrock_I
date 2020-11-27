import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private authServices: AuthService) {}

  ngOnInit(): void {}

  logoutUser() {
    this.authServices.logoutUser().then(() => {
      console.log('chao');
    });
  }
}
