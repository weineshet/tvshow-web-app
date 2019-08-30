import { Component, OnInit } from '@angular/core';
import {ICurrentTvshow} from'../icurrent-tvshow';

@Component({
  selector: 'app-current-tvshow',
  templateUrl: './current-tvshow.component.html',
  styleUrls: ['./current-tvshow.component.css']
})
export class CurrentTvshowComponent implements OnInit {

  current: ICurrentTvshow
  
  constructor() { 
    this.current = {
     search:'Tvshow',
      show:'name',
      title:'name',
      image:'',
      
      
    }
  }

  ngOnInit() {
  }

}
