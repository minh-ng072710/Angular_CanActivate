import {NgModule} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'
import {CommonModule} from '@angular/common'
import { AdminComponent } from './Component/AdminComponent/admin.component'
import { LoginComponent } from './Component/LoginComponent/login.component'
import { TintucComponent } from './Component/TinTucComponent/tintuc.component'
import { AdminGuards } from './Services/AdminGuards'

const routerConfig:Routes=[
    {path:"login",component:LoginComponent},
    {path:"tintuc",component:TintucComponent},
    {path:"admin",component:AdminComponent,canActivate:[AdminGuards]},
    {path:"**",component:TintucComponent},


]

@NgModule({
    declarations:[  
        LoginComponent,
        TintucComponent,
        AdminComponent
    ],
    imports:[
        CommonModule,
        RouterModule.forRoot(routerConfig),
        CommonModule
    ],
    exports:[RouterModule]
})//cấu trúc module
export class AppRoutingModule{

}