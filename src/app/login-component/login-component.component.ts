import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent {

  constructor(private router: Router) {}

  handleClick() {
    window.location.href = 'http://localhost:5000/api/auth/google';
  }

  authUrl = 'http://localhost:5000/api/auth/google'; // Replace with the URL of your Express API's Google authentication endpoint

  flogin() {
    const googleWindow = window.open(
      this.authUrl,
      'mywindow',
      'location=1,status=1,scrollbars=1, width=800,height=800'
    );
    let listener = window.addEventListener('message', (message) => {
      //message will contain facebook user and details
      const statusCode = message.data.statusCode;
      googleWindow!.close();
      if (statusCode === 200) {
        this.router.navigate(['/landing']);
      }
    });
  }

}
