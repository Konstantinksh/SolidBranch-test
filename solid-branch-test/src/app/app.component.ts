import { Component } from '@angular/core';
import { IUser } from './models/user';
import { users } from './data/jsonviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public name = 'Kanstantsin Krauchuk, 2022.09.16';
  public title = 'SolidBranch test task';
  public data: IUser[] = users.data;
  public buttons = ['Income', 'Outcome', 'Loan', 'Investments'];
}
