import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PersonComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
