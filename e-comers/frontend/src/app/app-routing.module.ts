  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { NavigatorComponent } from './navigator/navigator.component';
  import { HomeComponent } from './home/home.component';
  import { AddcartComponent } from './addcart/addcart.component';
  import { ContactComponent } from './contact/contact.component';
import { PantsComponent } from './pants/pants.component';
import { ShirtComponent } from './shirt/shirt.component';
import { TshirtComponent } from './tshirt/tshirt.component';
import { SiginComponent } from './sigin/sigin.component';
import { DummyComponent } from './dummy/dummy.component'
import { SigupComponent } from './sigup/sigup.component';
import { LastpageComponent } from './lastpage/lastpage.component'; 

  const routes: Routes = [
  
     { path: 'rrtrt', component: HomeComponent },
     { path: 'addcart', component: AddcartComponent },
       { path: 'contact', component: ContactComponent },
       {path: 'account/:id', component: AddcartComponent},
{path:'tshirt', component: TshirtComponent},
{path:'shirt', component: ShirtComponent},
{path:'pants', component: PantsComponent},
{path:'Sigin',component: SiginComponent},
{path:'singnup',component: SigupComponent},
{path:'last',component: LastpageComponent},

 { path: '', component: DummyComponent },

  ];


  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
