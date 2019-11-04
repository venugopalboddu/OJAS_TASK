import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Auth1Service } from './auth1.service';
import {Router} from '@angular/router';
@Injectable()
export class AuthgGuard implements CanActivate {
  constructor(private auth: Auth1Service,
    private myRoute: Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.isLoggedIn()){
      return true;
    }else{
      this.myRoute.navigate(["load"]);
      return false;
    }
  }
}