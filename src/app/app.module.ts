import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from 'src/app/_helpers/fake-backend';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { JwtInterceptor } from 'src/app/_helpers/jwt.interceptor';
import { ErrorInterceptor } from 'src/app/_helpers/error.interceptor';
import { AppComponent } from './app.component';
import { AlertComponent } from 'src/app/_components/alert.component';
import { HomeComponent } from 'src/app/home/home.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
    imports: [
        RouterOutlet,
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };