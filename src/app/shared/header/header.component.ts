import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  openN = false;
  constructor() {}

  ngOnInit(): void {}

  openNav() {
    this.openN = !this.openN;

    // this.openN = true;
  }
}
