import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';
import { MaterializeDirective } from 'angular2-materialize';
import { NgModule }             from '@angular/core';

import { CoreModule }     from './core/core.module';
import { AppComponent }   from './app.component';
import { AUTH_PROVIDERS } from 'angular2-jwt';

@NgModule({
    declarations: [
        AppComponent,
        MaterializeDirective
    ],
    imports: [
        CoreModule,
        FormsModule,
        CommonModule
    ],
    //providers: [AUTH_PROVIDERS],
    bootstrap: [AppComponent],
})

export class AppModule {
}