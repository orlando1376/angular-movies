import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { UserService } from '../user.service';
import { Observable } from 'rxjs/internal/Observable';
=======
import { UserService } from '../services/user.service';
import { User, Auth } from '../models/user';

>>>>>>> b28f725d205496986347b01a5f7aa53f867b9627

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User;
  loading: Boolean;
  result: String;

<<<<<<< HEAD
  constructor(userService: UserService) {

  }
=======
  constructor(private userService: UserService) {}
>>>>>>> b28f725d205496986347b01a5f7aa53f867b9627

  ngOnInit() {
    this.user = {
      username: '',
      password: '',
      email: ''
    }
    this.loading = false;
  }

  signup(): void {
    if (this.user) {
      this.loading = true;
      this.userService.signup(this.user)
        .subscribe(auth => {
          console.log(auth);
          this.loading = false;
        }, error => {
          this.result = 'No fue posible crear el usuario. Por favor intente más tarde.';
          console.log(error);
        });
      }
  }

  signup(): void {
    this.userService.signup(this.username, this.password, this.email).pipe()
  }
}
