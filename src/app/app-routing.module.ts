import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [{path : 'signup' , component  : SignupComponent},{path : 'login' , component : LoginComponent},
{path : 'profile', component : ProfileComponent},{path : 'home',component : HomeComponent},
{path : 'contact',component : ContactComponent},{path :'about', component : AboutComponent},
{path: '', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
