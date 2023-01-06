import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  MyCars: CarInfo[] = [];
constructor(private apiCaller: HttpClient){

}
ngOnInit(): void {
  this.getData();
}
getData(){
  this.apiCaller.get('http://localhost:3000/cars')
  .subscribe((data: any)=>{
   for (let i = 0; i < data.CarInfo.length; i++) {
      var c = new CarInfo();
      c.name = data.CarInfo[i]['A'];
      c.price = data.CarInfo[i]['B'];
      c.image = data.CarInfo[i]['C'];
      this.MyCars.push(c);
      console.log(this.MyCars)
   } 
    });
    
  
}
}

 class CarInfo{
name: string = '';
price: number =0;
image: string ='';
}
