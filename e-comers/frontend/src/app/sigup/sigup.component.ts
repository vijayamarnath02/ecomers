import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Router} from '@angular/router';  
@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent {
  myFormValue: any = {};
   responseData: any;  // Define myFormValue as an object
errorMessage:any;

  constructor(private http: HttpClient, private router: Router) {}

  register(myForm: any) {

this.http.post('http://localhost:8080/signupb', myForm.value).subscribe(
    (response:any) => {
      console.log(response);
       this.router.navigate(['/']);
    },
     (error: any) => {
      if (error && error.error && error.error.message ) {
        this.errorMessage = error.error.message;
        console.log(error[0]);


      } else {
           console.log(error);
        this.errorMessage = 'An error occurred. Please try again later.';
         // this.router.navigate(['/']);
      }
    }
);
}
}

