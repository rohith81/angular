import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HtmlComponent } from "./html/html.component";
import { JavascriptComponent } from "./javascript/javascript.component";
import { AngularComponent } from "./angular/angular.component";


@NgModule({
    imports: [
        RouterModule.forRoot([
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
        ])
    ],
    exports: [RouterModule]
})
export class SkillsRoutesModule{

}