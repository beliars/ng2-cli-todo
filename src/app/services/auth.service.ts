import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { myConfig }        from './auth.config';
import   Auth0Lock         from 'auth0-lock';
import {BehaviorSubject} from "rxjs";
// Avoid name not found warnings

@Injectable()
export class Auth {
    // Configure Auth0
    lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {});


    public isAuthenticated$ = new BehaviorSubject(false);


    constructor() {
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", (authResult) => {
            localStorage.setItem('id_token', authResult.idToken);
            this.isAuthenticated$.next(null)
        });
    }

    public login() {
        // Call the show method to display the widget.
        this.lock.show();
    }

    public authenticated() {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    }

    public logout() {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
    }
}