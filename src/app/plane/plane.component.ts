import { Component, OnInit } from '@angular/core';
import { PlaneService } from '../plane.service';

@Component({
  selector: 'app-plane',
  templateUrl: './plane.component.html',
  styleUrls: ['./plane.component.scss']
})
export class PlaneComponent implements OnInit {
faqs=[];
  constructor(private planeService:PlaneService) { }

  ngOnInit(): void {
    this.faqs=this.planeService.getAllfaqs();
  }

}
