import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";


@NgModule({
    imports:[
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
              component: AboutComponent,
            },
            {
              path: 'contact',
              component: ContactComponent
            },
            {
              path: 'portfolio',
              loadChildren: './portfolio/portfolio.module#PortfolioModule'
            }
          ]),
    ],
    exports:[
        RouterModule
    ]
})
export class RoutesModule{

}