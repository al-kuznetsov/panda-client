import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users?: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.findAll().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onOpenModal(user: User | null, mode: string): void {
    // Get a handle to the DOM
    const container = document.getElementById('main-container');
    // Greate new element and set its attributes based on user input
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'create') {
      button.setAttribute('data-target', '#createUserModal');
    }
    if (mode === 'update') {
      button.setAttribute('data-target', '#updateUserModal');
    }
    if (mode === 'delete') {
      button.setAttribute('data-target', '#deleteUserModal');
    }
    // Add the element to the DOM
    container?.appendChild(button);
    button.click(); // Call the action to invoke the referenced modal window
  }

}
