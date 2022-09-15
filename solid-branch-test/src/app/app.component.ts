import { Component, Input } from '@angular/core';
import { IUser } from './models/user';
import { users } from './data/jsonviewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kanstantsin Krauchuk';
  subtitle = 'SolidBranch test task';
  data: IUser[] = users.data;
  buttons = ['Income', 'Outcome', 'Loan', 'Investments']
}
