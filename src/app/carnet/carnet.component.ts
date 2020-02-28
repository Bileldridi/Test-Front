import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.css']
})
export class CarnetComponent implements OnInit {
  contacts = [
    { name: 'bilel', num: 2355144 },
    { name: 'ahmed', num: 2355144 },
    { name: 'achref', num: 2355144 },
    { name: 'badr', num: 2355144 },
    { name: 'karim', num: 2355144 },
    { name: 'tarek', num: 2355144 },
    { name: 'wajih', num: 2355144 },
  ];

  alpha = [
'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M' , 'N',
 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ];

  public search = '';

  constructor() { }

  ngOnInit() {
  }

}
