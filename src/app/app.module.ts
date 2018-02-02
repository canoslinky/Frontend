import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppRegisterComponent } from './app-register/app-register.component';

import { RouterModule } from '@angular/router';
import { ApiService } from './api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './auth.service';
import { AppUsersComponent } from './app-users/app-users.component';
import { AppProfileComponent } from './app-profile/app-profile.component';
import { AppPostComponent } from './app-post/app-post.component';
import { AppPostsComponent } from './app-posts/app-posts.component';
import { AuthInterceptorService } from './authinterceptor.service';

const routes = [
  { path: 'register' , component: AppRegisterComponent },
  { path: 'users', component: AppUsersComponent },
  { path: 'profile/:id', component: AppProfileComponent },
  { path: 'post', component: AppPostComponent },
  { path: 'posts', component: AppPostsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppRegisterComponent,
    AppUsersComponent,
    AppProfileComponent,
    AppPostComponent,
    AppPostsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    HttpClientModule
    ],
  providers: [ApiService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
