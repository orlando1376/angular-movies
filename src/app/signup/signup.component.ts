import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username: string;
  password: string;
  email: string;

  constructor(userService: UserService) {

  }

  ngOnInit() {
  }

  signup(): void {
    this.userService.signup(this.username, this.password, this.email).pipe()
  }
}
