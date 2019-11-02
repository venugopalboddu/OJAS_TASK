import { HttpClient } from '@angular/common/http';
import { LoginService } from './../../login.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Alert1Service } from './../../alert1.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  val:boolean;

  constructor( private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private loginService: LoginService, private alert1Service: Alert1Service, private ht:HttpClient) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get f() { return this.loginForm.controls; }

  onSubmit(e) {
     this.submitted = true;
     
    // // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    // this.loading = true;
    // this.loginService.login(this.loginForm.value)
    //     .pipe(first())
    //     .subscribe(
    //         data => {
    //             alert("Login successfull");
    //             this.router.navigate(['/dash']);
    //         },
    //         error => {
    //             this.alert1Service.error(error);
    //             this.loading = false;
    //         });

    this.ht.get("http://localhost:3000/posts?username="+e.username).subscribe(resp=>{console.log(resp)
if(resp==0){
  this.val=true;
  this.loginForm.reset();
}
else{
  alert("Login successfull");
  this.router.navigate(['/dash']);
  this.val=false;
  
  }})



}


}
