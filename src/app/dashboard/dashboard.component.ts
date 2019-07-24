import { Component, OnInit } from '@angular/core';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any;
  name: string;
  deptName: string;
  phoneNumber: number;
  constructor(private service: SharingService) { }

  ngOnInit() {
    this.data = this.service.getData();
    this.name = this.data.name;
    this.deptName = this.data.deptName;
    this.phoneNumber = this.data.phoneNumber;
  }

}
