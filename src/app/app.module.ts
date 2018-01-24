import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppRegisterComponent } from './app-register/app-register.component';

import { RouterModule } from '@angular/router';
import { ApiService } from './api.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppLoginComponent } from './app-login/app-login.component';
import { AuthService } from './auth.service';
import { AppUsersComponent } from './app-users/app-users.component';

const routes = [
  { path: 'register' , component: AppRegisterComponent },
  { path: 'login' , component: AppLoginComponent },
  { path: 'users', component: AppUsersComponent },
  { path: 'profile/:id', component: AppUsersComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppRegisterComponent,
    AppLoginComponent,
    AppUsersComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    HttpClientModule,
    HttpModule
    ],
  providers: [ApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
