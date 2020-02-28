import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts = [
    { name: 'bilel', num: 2355144 },
    { name: 'ahmed', num: 2355144 },
    { name: 'achref', num: 2355144 },
    { name: 'badr', num: 2355144 },
    { name: 'karim', num: 2355144 },
    { name: 'tarek', num: 2355144 },
    { name: 'wajih', num: 2355144 },
  ];
  x: number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
const i = +params.get('i');
this.x = i;
    });
    console.log(this.x);
  }

}
