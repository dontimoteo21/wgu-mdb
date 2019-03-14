import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { User } from '../../auth/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('sidenav') sidenav: ElementRef;
  @Input() user: User;
  @Input() isLoggedIn: boolean;
  @Input() isLoading: boolean;
  @Input() isAdmin: boolean;

  @Output() logout = new EventEmitter<User>();

  clicked: boolean;
  constructor() {
    this.clicked = this.clicked === undefined ? false : true;
   }

  ngOnInit() {
  }

  onLogout() {
    this.logout.emit(this.user);
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }

}
