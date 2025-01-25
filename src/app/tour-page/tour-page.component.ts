import { Component, OnInit } from '@angular/core';
import { Tour } from '../shared/models/tours';
import { ActivatedRoute } from '@angular/router';
import { ToursService } from '../services/tours/tours.service';

@Component({
  selector: 'app-tour-page',
  standalone: false,
  
  templateUrl: './tour-page.component.html',
  styleUrl: './tour-page.component.css'
})
export class TourPageComponent implements OnInit {

  tour!:Tour;
  expandedIndex: number | null = null;
  constructor(private activatedRoute:ActivatedRoute, private tourService:ToursService){

    this.activatedRoute.params.subscribe((params)=>{
      if(params.name)
        this.tour = tourService.getTourByName(params.name);
    }
  
  )

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggleExpand(index: number): void {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

}
