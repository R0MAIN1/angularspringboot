import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../services/models/User";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  users: User[] = [];
  newUser: User = { id: 0, name: '', email: '' };

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  addUser(): void {
    this.userService.createUser(this.newUser).subscribe(user => {
      this.users.push(user);
      this.newUser = { id: 0, name: '', email: '' };
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
    });
  }


}
