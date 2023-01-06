
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
 
@Input() Name: string = 'N1';
@Input() Price: number = 0;
@Input() Imageurl: string = ''; 
  constructor() { }

  ngOnInit(): void {
  }
  ClickMe()
  {
     alert(this.Name);
  }
}