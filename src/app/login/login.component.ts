import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user: User;
  loading: Boolean;
  result: String;

  constructor(private userService: UserService) { 

  }

  ngOnInit() {
    this.user = {
      username: '',
      password: ''
    }
  }

  login(): void {
    console.log('Ya llegué');
    if (this.user) {
      this.loading = true;
      this.userService.login(this.user)
        .subscribe(auth => {
          console.log(auth);
          this.loading = false;
        }, error => {
          this.result = 'No fue posible logearse. Por favor intente más tarde.';
          console.log(error);
        });
      }
  }

}
