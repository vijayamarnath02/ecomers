import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
  log = 1;
  price: any;
  response: any[] = [];

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit() {
    this.get()
  }
  get(){
    this.httpClient.get<any>('http://localhost:8080/cart').subscribe(
      (res) => {
        this.response = res.message; // Assuming res.message is an array
        console.log(this.response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  // click() {
  //   this.httpClient.get<any>('http://localhost:8080/last').subscribe(
  //     (res) => {
  //       this.response = res.message;
  //       console.log(this.response);
  //        this.router.navigate(['/addcart']);
  //       window.location.reload();
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }

  remove(Pname: any) {
    var data = { name: Pname };
    this.httpClient.post('http://localhost:8080/cart/delete', data).subscribe(
      () => {
        alert('confirm');
        this.router.navigate(['/addcart']);
        // window.location.reload();
        this.get()
      },
      (error) => {
        console.error(error);
      }
    );
  }

  add(amount: any, count: any, Pname: any) {
    count = count + 1;
    amount = amount * count;
    Pname = Pname + '';
    const data = { count, amount, Pname };
    if(count> 0){
    this.httpClient.post('http://localhost:8080/cart/update', data).subscribe(
      () => {
        alert('confirm');
        this.router.navigate(['/addcart']);
         this.get();
      },
      (error) => {
        console.error(error);
      }
    );
  }
  else{
    alert("Sry you Cannot");
  }
  }
   sub(amount: any, count: any, Pname: any) {
    count = count - 1;
    amount = amount * count;
    Pname = Pname + '';
    const data = { count, amount, Pname };
     if(count> 0){
    this.httpClient.post('http://localhost:8080/cart/update', data).subscribe(
      () => {
        
        this.router.navigate(['/addcart']);
         this.get();
      },
      (error) => {
        console.error(error);
      }

    );
  }
  else{
    alert("Sry you Cannot");
  }
  }
  
}
