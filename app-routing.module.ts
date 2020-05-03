import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AddProductsComponent } from "./add-products/add-products.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { DirectivesComponent } from "./directives/directives.component";
import { SampleComponent } from "./sample/sample.component";




@NgModule({

    imports:[
        RouterModule.forRoot([
            {path: 'sample', component: SampleComponent},
            {path: 'add-products', component: AddProductsComponent},
            {path:'login', component:LoginComponent},
            {path: 'register' , component: RegisterComponent},
            {path: '**', component: PageNotFoundComponent}
          ])
      
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}