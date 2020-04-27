import { Injectable } from "@angular/core";
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class MemberListResolver implements Resolve<User[]>{

    pageNumber = 1;
    pageSize = 5;
    constructor(private userService: UserService,
        private alertify: AlertifyService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
        return this.userService.getUsers(this.pageNumber,this.pageSize).pipe(
            catchError(error => {
                this.alertify.error('Problem reciving data');
                this.router.navigate(['/home']);
                return of(null);
            })
        );
    }
}