import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharingService } from '../sharing.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: any;
      name: string;
      password: string;
      employeeLogin = new FormGroup({
        name: new FormControl(''),
        password: new FormControl('')
      });
  constructor(private router: Router, private service: SharingService) { }

  ngOnInit() {
    this.data = this.service.getData();
    
  }
onSubmit() {
    if ( (this.employeeLogin.value.password === this.data.password) && (this.employeeLogin.value.name === this.data.name)) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Wrong Password or Wrong name');
    }
}
}
