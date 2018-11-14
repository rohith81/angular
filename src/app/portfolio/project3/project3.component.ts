import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project3',
  templateUrl: './project3.component.html',
  styleUrls: ['./project3.component.css']
})
export class Project3Component implements OnInit {

  constructor(
    private x:Router
  ) { }

  ngOnInit() {
  }

  go_to(){
    this.x.navigateByUrl('./portfolio/project2');    
  }

}
