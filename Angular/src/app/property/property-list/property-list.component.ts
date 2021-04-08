import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../shared.service';
import { IProperty } from '../iproperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: Array<IProperty>;
  constructor(
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2;
    }
    this.sharedService.getProperties(this.SellRent).subscribe(
      (data) => {
        this.properties = data;
        console.log(data);
      },
      (error) => console.log('httperror: ', error)
    );
  }
}
