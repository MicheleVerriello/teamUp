import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: String;

  constructor(private router: Router) {
    this.isLoggedIn = localStorage.getItem("isLoggedIn");
  }

  ngOnInit() {
    this.isLoggedIn = localStorage.getItem("isLoggedIn");
  }

  logout() {
    localStorage.setItem("isLoggedIn", "false");
    this.router.navigate(['/registrazione']);
  }
}
