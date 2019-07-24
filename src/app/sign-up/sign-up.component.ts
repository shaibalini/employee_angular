import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SharingService } from '../sharing.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  data: any;
  @Output() redirect: EventEmitter<any> = new EventEmitter();
  employeeForm = new FormGroup({
    name: new FormControl(''),
    deptName: new FormControl(''),
    phoneNumber: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private route: Router, private service: SharingService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.data = this.employeeForm.value;
    this.service.setData(this.data);
    this.route.navigate(['/login']);
  }
}
