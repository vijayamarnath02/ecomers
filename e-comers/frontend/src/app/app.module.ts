import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { AddcartComponent } from './addcart/addcart.component';
import { ContactComponent } from './contact/contact.component';
import { TshirtComponent } from './tshirt/tshirt.component';
import { ShirtComponent } from './shirt/shirt.component';
import { PantsComponent } from './pants/pants.component';
import { DummyComponent } from './dummy/dummy.component';
import { SiginComponent } from './sigin/sigin.component';
import { SigupComponent } from './sigup/sigup.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LastpageComponent } from './lastpage/lastpage.component'; 

// Import ReactiveFormsModule
@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    HomeComponent,
    FooterComponent,
    CartComponent,
    AddcartComponent,
    ContactComponent,
    TshirtComponent,
    ShirtComponent,
    PantsComponent,
    DummyComponent,
    SiginComponent,
    SigupComponent,
    LastpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
