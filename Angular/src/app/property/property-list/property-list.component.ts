import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [
    {
      Id: 1,
      Name: 'Birla1',
      Type: 'House',
      Price: 12000,
    },
    {
      Id: 2,
      Name: 'Birla2',
      Type: 'House',
      Price: 12000,
    },
    {
      Id: 3,
      Name: 'Birla3',
      Type: 'House',
      Price: 12000,
    },
    {
      Id: 4,
      Name: 'Birla4',
      Type: 'House',
      Price: 12000,
    },
    {
      Id: 5,
      Name: 'Birla5',
      Type: 'House',
      Price: 12000,
    },
    {
      Id: 6,
      Name: 'Birla6',
      Type: 'House',
      Price: 12000,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
