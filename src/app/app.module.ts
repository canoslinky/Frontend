import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppRegisterComponent } from './app-register/app-register.component';

import { RouterModule } from '@angular/router'

const routes = [ 
  { path:'register' , component:AppRegisterComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppRegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
