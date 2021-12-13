import { HotelsService } from './../../services/hotels.service';
import { Component, OnInit } from '@angular/core';
import { IProperty } from '../IProperty.interface';
//import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties!: Array<IProperty>;
  constructor(private hotelsServices: HotelsService) { }

  ngOnInit(): void {
    this.hotelsServices.getAllProperties().subscribe(
      data=>{
        this.properties=data
        console.log(data)
      },
      err=>{
        console.log(err)
      }
      
    )}}
    


