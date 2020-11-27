import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { fromEventPattern, Observable } from 'rxjs';
import { AuthService } from './Services/auth.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authService.hasUser().pipe(
      tap((user) => console.log(user)),
      map((user) => (user === null ? false : true))
    );
  }
}
