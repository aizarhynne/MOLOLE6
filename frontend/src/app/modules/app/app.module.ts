/*import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module'; // Adjusted path
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: []
})
export class AppModule { }
*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from '../../app.component'; // Import the root component
import { LoginPageComponent } from '../../components/login-page/login-page.component'; // Adjust path if necessary
import { ListPostsComponent } from '../../components/list-posts/list-posts.component'; // Adjust path if necessary
import { RegisterPageComponent } from '../../components/register-page/register-page.component'; // Adjust path if necessary
import { PostDetailComponent } from '../../components/post-detail/post-detail.component'; // Adjust path if necessary

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppComponent,
    HttpClientModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
})
export class AppModule { }
