import { NgModule } from "@angular/core";
import { PortfoliohomeComponent } from "./portfoliohome/portfoliohome.component";
import { Project1Component } from "./project1/project1.component";
import { Project2Component } from "./project2/project2.component";
import { Project3Component } from "./project3/project3.component";
import { PortfolioRoutesModule } from "./portfolio.routes.module";
import { PortfolioComponent } from "./portfolio.component";


@NgModule({
    declarations: [
        Project1Component,
        Project2Component,
        Project3Component,
        PortfoliohomeComponent,
        PortfolioComponent
    ],
    imports:[ 
        PortfolioRoutesModule
    ]
})
export class PortfolioModule{

}