import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
infos=[];

  constructor(private infoService:InfoService) { }

  ngOnInit(): void {
    this.infos=this.infoService.getAllinfos();
  }

}
