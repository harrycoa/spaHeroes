import { Component, OnInit,ViewChild } from '@angular/core';
//import {MatMenuTrigger} from '@angular/material';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
 
  //@ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  constructor() { }

  ngOnInit(): void {
  }

  
/*
  someMethod(){
    this.trigger.openMenu();
  }*/

}
