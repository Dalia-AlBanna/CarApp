import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {
 CarName: string='';
 Price: number=0;
 Imageurl: string = '';

  constructor(private apiCaller:HttpClient) { }

  ngOnInit(): void {
  }
AddCar(): void{
  fetch('http://localhost:3000/addcars', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(
      {
        "name": this.CarName,
        "price": this.Price,
        "image": this.Imageurl
      }
    )
    }
  )
  alert ("A car is successfully added");
  window.location.reload();
  }

}
