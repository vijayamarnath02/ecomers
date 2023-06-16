import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  response: any;
  response1: any;
  errorMessage: any;

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit() {
    this.get();
         

  }
  get(){
        this.httpClient.get<any>('http://localhost:8080/home').subscribe(
      (res) => {
        this.response = res.message;
        console.log(this.response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
 click(name: string,Amount:any) {
    alert("Are you want add to cart");
    const count =1;
    // const data =;
    this.httpClient.post('http://localhost:8080/temp/cart', {name,count,Amount}).subscribe(
      (response: any) => {
        console.log(response);
           this.router.navigate(['/']);
      },
      (error: any) => {
        console.error(error);
        this.errorMessage = 'An error occurred while adding to cart.';
      }
    );
  }
}
