import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
info=[
  {
    topic:" رزرو هتل از گذشته تا امروز ", par:


  "سسسس"




},
  {
    topic:"ییییییییییی", par:"سسسسسسسسسسسسسسسسس"
  },
  {
   topic:"یییییییییییی", par:"سسسسسسسسس"
  },
  {
    topic:"یییییی", par:"سسسسسسسسس"
  },
  {
   topic:"بببببب", par:"ااااااااا"
  },
  {
    topic:"تتتتتت", par:"ننننننننن"
  },
  {
    topic:"ممممممممم", par:"ککککککککک"
  },
  {
   topic:"گگگگگگگگگ", par:"اااااا"
  },
  {
   topic:"ببببببببب", par:"ططططططططط"
  },
  {
    topic:"للللللللل", par:"للللللللل"
  },
]
  constructor() { }
  getAllinfos(){
  return this.info;
  }
}
