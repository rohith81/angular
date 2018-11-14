import { NgModule } from "@angular/core";
import { SkillsRoutesModule } from "./skills.routes.module";
import { HtmlComponent } from "./html/html.component";
import { JavascriptComponent } from "./javascript/javascript.component";
import { AngularComponent } from "./angular/angular.component";


@NgModule({
    declarations: [
        HtmlComponent,
        JavascriptComponent,
        AngularComponent
    ],
    imports: [
        SkillsRoutesModule
    ]
})
export class SkillsModule{

}