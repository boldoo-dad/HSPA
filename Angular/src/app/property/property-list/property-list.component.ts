import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { IProperty } from '../iproperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<IProperty>;
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.sharedService.getProperties().subscribe(
      (data) => {
        this.properties = data;
        console.log(data);
      },
      (error) => console.log('httperror: ', error)
    );
  }
}
