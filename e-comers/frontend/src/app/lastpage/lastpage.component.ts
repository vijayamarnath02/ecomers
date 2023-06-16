import { Component , OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lastpage',
  templateUrl: './lastpage.component.html',
  styleUrls: ['./lastpage.component.css']
})

export class LastpageComponent implements OnInit {
  response:any;
  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit() {
    this.httpClient.get<any>('http://localhost:8080/last').subscribe(
      (res) => {
        this.response = res.message; 
        console.log(this.response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  set(){
        this.httpClient.get<any>('http://localhost:8080/temp/temp').subscribe(
      (res) => {
        this.response = res.message;
        console.log(this.response);
      },
      (error) => {
        console.error(error);
      }
    );
}
 
  submitData() {
    this.httpClient.post('http://localhost:8080/last/insert',this.response).subscribe(
      (res) => {
        console.log(this.response);
        this.set();
        this.router.navigate(['/']);
      },
      (error) => {
        console.error(error);
        this.router.navigate(['/']);
      }
    );
  }


}
