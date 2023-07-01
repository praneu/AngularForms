import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];

  topicHasError = true;

  Submitted = false;

  errormsg='';

  userModel = new User('Rob','rob@test.com', 5556669999, 'default','morning', true); 

  constructor(private _enrollmentService: EnrollmentService ){}

  validateTopic(value: string){
     if(value == 'default'){
      this.topicHasError= true;
     }else {
      this.topicHasError= false;
     }
  }

  onSubmit(){
    //console.log(this.userModel);
    this.Submitted= true ;
    this._enrollmentService.enroll(this.userModel)
       .subscribe({
           next: (data) => console.log('Success!', data),
           error: (error) => this.errormsg = error.statusText }as Observer<any>
       );
  }
  
}
