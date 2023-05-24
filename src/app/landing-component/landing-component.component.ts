import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-component',
  templateUrl: './landing-component.component.html',
  styleUrls: ['./landing-component.component.css'],
})
export class LandingComponentComponent {
  constructor(private http: HttpClient) {}

  name: String = '';
  email: String = '';

  ngOnInit() {
    this.http
      .get<any>('http://localhost:5000/api/auth/user', {
        withCredentials: true,
      })
      .subscribe((data) => {
        console.log(data);
        this.name = data.name;
        this.email = data.email;
      });
  }
}
