import { Component, OnInit } from '@angular/core';
import { ToursService } from '../services/tours/tours.service';
import { Tour } from '../shared/models/tours';

@Component({
  selector: 'app-tours',
  standalone: false,
  
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent implements OnInit{

  tours:Tour[]=[];
  constructor(private toursService:ToursService){}

  ngOnInit(): void {
    this.tours = this.toursService.getAll();
  }

}
