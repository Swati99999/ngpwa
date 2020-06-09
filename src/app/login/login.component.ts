import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'login-2',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class Login2Component implements OnInit {
    
    loginForm: FormGroup;
    submitted = false;

    
    constructor(
        private router: Router,
        private formBuilder: FormBuilder
    ) {
       
    }

    
    ngOnInit(): void {

        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
            
        });
        
    }

    get f() { return this.loginForm.controls; }

    login() {

        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        }
        else
        {
            this.router.navigate(['/home']);
        }

    }
}
