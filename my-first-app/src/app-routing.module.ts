import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { DateComponent } from 'src/app/date/date.component';
import { ViewComponent } from 'src/app/view/view/view.component';
import { AboutComponent } from 'src/app/about/about.component';
import { ErrorComponent } from 'src/app/error/error.component';
import { HomeComponent } from 'src/app/home/home.component';
import { AboutProfileComponent } from 'src/app/about-profile/about-profile.component';
import { AboutContactComponent } from 'src/app/about-contact/about-contact.component';

//This is my case 
const routes: Routes = [
    { path: '',redirectTo: '/home',pathMatch: 'full' },
    { path: 'home',component: HomeComponent },
    { path: 'about',component: AboutComponent ,

    children: [
        { path: '',redirectTo: 'profile',pathMatch: 'full' },
        {path: 'profile',component:AboutProfileComponent},
        {path: 'contact',component:AboutContactComponent},
        { path: '**',redirectTo:'profile',pathMatch:'full' }

    ]

  },
    { path: '**',component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }