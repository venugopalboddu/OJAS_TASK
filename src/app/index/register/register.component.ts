import { User1Service } from './../../user1.service';
import { Alert1Service } from './../../alert1.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private user1Service: User1Service,
    private alert1Service: Alert1Service) { }

  courses: any = ['Java', '.Net', 'UI', 'Python']

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['male', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]],
      course: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      village: ['', Validators.required],
      pin: ['', [Validators.required, Validators.pattern(/^(\d{6}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/)]]
    });
  }
  get f() { return this.registerForm.controls; }

  changeCourse(e) {
    console.log(e.value)
    this.course.setValue(e.target.value, {
      onlySelf: true
    })
  }
  get course() {
    return this.registerForm.get('course');
  }

  reg: any;
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.user1Service.register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          alert("Registration successfull");
          this.reg = data;
          console.log('register', this.reg);
          localStorage.setItem('registerdata', this.reg.username);
          this.router.navigate(['/login']);
        },
        error => {
          this.alert1Service.error(error);
          this.loading = false;
        });

  }

}
