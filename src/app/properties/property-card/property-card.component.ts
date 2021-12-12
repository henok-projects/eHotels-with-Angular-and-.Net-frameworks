import { Component } from "@angular/core";

@Component({
    selector:'app-prperty-card',
    templateUrl:`property-card.component.html`,
    styleUrls:['property-card.component.css']
})
export class PropertyCardCompenent{
 property:any ={
     'Id':1,
     'Type':'Skylight',
     'price': 1200
      
 }
}