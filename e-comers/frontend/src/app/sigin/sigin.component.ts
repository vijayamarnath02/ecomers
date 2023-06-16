import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent {
  myFormValue: any = {};
  responseData: any;
  errorMessage: any;
 
  constructor(private http: HttpClient, private router: Router) {}

  register(myForm: any) {
    this.http.post('http://localhost:8080/siginb', myForm.value).subscribe(
      (response: any) => {
        console.log(response);
        alert("Thank you for logging in");
        this.router.navigate(['/']);
      },
      (error: any) => {
        if (error && error.error && error.error.message) {
          this.errorMessage = error.error.message;
          console.log(this.errorMessage);
        } else {
          this.errorMessage = 'An error occurred. Please try again later.';
        }
      }
    );
  }
}
