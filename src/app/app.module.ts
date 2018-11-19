import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import 'hammerjs';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioModule } from './portfolio/portfolio.module';
import { SkillsModule } from './skills/skills.module';
import { RoutesModule } from './app.routes.module';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import {MatButtonModule, MatCheckboxModule} from '@angular/material';
//import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    PortfolioModule,
    SkillsModule,
    //ReactiveFormsModule
    //BrowserAnimationsModule,
    //MatButtonModule,
    //MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
