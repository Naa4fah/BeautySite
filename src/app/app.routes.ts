import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { LipsComponent } from './pages/lips/lips.component';
import { AccountComponent } from './pages/account/account.component';
import { AddcartComponent } from './pages/addcart/addcart.component';
import { LipbamComponent } from './pages/lipbam/lipbam.component';
import { LipglossComponent } from './pages/lipgloss/lipgloss.component';
import { FaceComponent } from './pages/face/face.component';
import { EyeComponent } from './pages/eye/eye.component';


export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:'product',component:ProductComponent},
    {path:'lip',component:LipsComponent},
    {path:'face',component:FaceComponent},
    {path:'eye',component:EyeComponent},
    {path:'lipbam',component:LipbamComponent},
    {path:'lipgloss',component:LipglossComponent},
    {path:'account',component:AccountComponent},
    {path:'lip/:id',component:AddcartComponent},
    {path:'lipbam/:id',component:AddcartComponent},
    {path:'lipgloss/:id',component:AddcartComponent}

    
];
