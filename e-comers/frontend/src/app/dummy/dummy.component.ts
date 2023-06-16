import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface SignInResponse {
  token: string;
}

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css'],
})
export class DummyComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  signIn(): void {
    this.http.post<SignInResponse>('http://localhost:8080/signin', { username: this.username, password: this.password })
      .subscribe(
        (response) => {
          localStorage.setItem('token', response.token); // Store the token in localStorage
          this.router.navigate(['/protected']); // Navigate to a protected route
        },
        (error) => {
          this.errorMessage = error.error.message;
        }
      );
  }
}
