import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";

@NgModule({
  declarations: [
                 AppComponent,
                 ...navigatableComponents
                ],
  bootstrap: [AppComponent],
  imports: [
            NativeScriptModule,
            NativeScriptFormsModule,
            NativeScriptRouterModule,
            NativeScriptRouterModule.forRoot(routes)
          ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
