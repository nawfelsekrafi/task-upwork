import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    var menu = <HTMLElement>document.querySelector('.__logout-btn');
    menu.style.visibility =  (menu.style.visibility == 'visible')? 'hidden': 'visible';
    
  }

}
