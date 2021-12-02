import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.onHover();
  }

  onHover(){
    var tab = document.querySelectorAll('.__sidebar > div');
    var sidebar = <HTMLElement>document.querySelector('.__sidebar');
    var title  = document.querySelectorAll('.title');

  tab.forEach(x => {
      x.addEventListener('mouseover', function(){
        (<HTMLElement>x).classList.add('titleIsActive');
        title.forEach(x => {
         (<HTMLElement>x).style.visibility = 'visible'
        });
      });
      x.addEventListener('click', function(){
        tab.forEach(x =>  (<HTMLElement>x).classList.remove('titleIsFocused'));
        (<HTMLElement>x).classList.add('titleIsFocused');
      });


    }); 
   sidebar.addEventListener('mouseover', function(){
      sidebar.style.width = '260px';
      title.forEach(x => {
        (<HTMLElement>x).style.visibility = 'visible'
       });
    }) 
    sidebar.addEventListener('mouseout', function(){
      sidebar.style.width = '71px';
      tab.forEach(x =>  (<HTMLElement>x).classList.remove('titleIsActive'));
      title.forEach(x => {
        (<HTMLElement>x).style.visibility = 'hidden'
       });
   
    })
   
  }

}
