import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';

import { User } from '../../User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users: User[];
title: string;

  constructor(private userService: UsersService) {
    this.userService.getUsers()
      .subscribe(users => {
        // console.log(users);
        this.users = users
        // console.log(this.users);
      });
  }

  ngOnInit() {
  }

  addUsers(event){
    event.preventDefault();
    // console.log(this.title);
    const newUser: User = {
      title: this.title,
      isDone: false
    };
    this.userService.addUsers(newUser)
    .subscribe(user => {
      this.users.push(user);
      // Para que se vuelva blanco el input
      this.title = '';
      console.log(this.users);
    });
  }

  deleteUsers(id){
    const response = confirm('¿Quieres eliminar este elemento?');
    if(response){
      const users = this.users;
      this.userService.deleteUsers(id)
        .subscribe(data => {
          // console.log(data);
          if(data.n == 1){
            for(let i=0; 0 < users.length; i++){
              if(users[i]._id == id){
                users.splice(i, 1);
              }
            }
          }
        });
    }
    return;
  }

  updateUsers(user: User){
    const newUser = {
      _id: user._id,
      title: user.title,
      isDone: user.isDone
    }

    this.userService.updateUsers(newUser)
      .subscribe( res => {
        user.isDone = !user.isDone
      });
    }
  }