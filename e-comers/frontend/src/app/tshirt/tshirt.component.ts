import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tshirt',
  templateUrl: './tshirt.component.html',
  styleUrls: ['./tshirt.component.css']
})
export class TshirtComponent {
  response: any;
errorMessage :any;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get<any>('http://localhost:8080/drop/1').subscribe(
      (res) => {
        this.response = res.message;
        console.log(this.response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
   click(name: string,Amount:number ) {
    const count =1;
    alert("Are you want add to cart");
    this.httpClient.post('http://localhost:8080/temp/cart', {name,count,Amount}).subscribe(
      (response: any) => {
        console.log(response);

      },
      (error: any) => {
        console.error(error);
        this.errorMessage = 'An error occurred while adding to cart.';
      }
    );
  }
}
