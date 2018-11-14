import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { HtmlComponent } from './skills/html/html.component';
import { JavascriptComponent } from './skills/javascript/javascript.component';
import { AngularComponent } from './skills/angular/angular.component';
import { Project1Component } from './portfolio/project1/project1.component';
import { Project2Component } from './portfolio/project2/project2.component';
import { Project3Component } from './portfolio/project3/project3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent,
    HtmlComponent,
    JavascriptComponent,
    AngularComponent,
    Project1Component,
    Project2Component,
    Project3Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      
          {
            path: 'html',
            component:HtmlComponent
          },
          {
            path: 'javascript',
            component: JavascriptComponent
          },
          {
            path: 'angular',
            component: AngularComponent
          }
      {
        path: 'portfolio',
        component: PortfolioComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
