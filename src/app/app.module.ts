import { PropertyDetailComponent } from './properties/property-detail/property-detail.component';
import { AddPropertyComponent } from './properties/Add-property/Add-property.component';
import { PropertyCardCompenent } from './properties/property-card/property-card.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HotelsService } from './services/hotels.service';
import {Routes,RouterModule} from '@angular/router';

const addRoutes:Routes = [
  {path:'', component: PropertyListComponent},
  {path:'rent-property', component:PropertyCardCompenent},
  {path:'add-property', component: AddPropertyComponent},
  {path:'property-detail/:id', component: PropertyDetailComponent}
] 

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardCompenent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(addRoutes)
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
