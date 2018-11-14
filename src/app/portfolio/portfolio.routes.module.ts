import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PortfolioComponent } from "./portfolio.component";
import { PortfoliohomeComponent } from "./portfoliohome/portfoliohome.component";
import { Project1Component } from "./project1/project1.component";
import { Project2Component } from "./project2/project2.component";
import { Project3Component } from "./project3/project3.component";


@NgModule({
    imports:[ 
        RouterModule.forRoot([
        {
            path: 'portfolio',
            component: PortfolioComponent,
            children: [
              {
                path: '',
                component: PortfoliohomeComponent
              },
              {
                path: 'portfoliohome',
                component: PortfoliohomeComponent
              },
              {
                path: 'project1',
                component: Project1Component
              }, 
              {
                path: 'project2',
                component: Project2Component
              },
              {
                path: 'project3',
                component: Project3Component
              }
            ]
          }
    ])
],
    exports: [RouterModule]
})
export class PortfolioRoutesModule{

}