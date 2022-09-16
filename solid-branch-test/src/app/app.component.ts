import { Component, Input } from '@angular/core';
import { IUser } from './models/user';
import { users } from './data/jsonviewer';
import { IList } from './models/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kanstantsin Krauchuk';
  subtitle = 'SolidBranch test task';
  data: IUser[] = users.data;
  buttons = ['Income', 'Outcome', 'Loan', 'Investments'];
  list = this.data.reduce((acum, cur) => {
    const fullName = `${cur.name.first} ${cur.name.last}`
    if (!acum[fullName]) {
      acum[fullName] = [cur.type, 1]
    } else {
      acum[fullName][1] += 1
    }
    console.log(acum)
    return acum;
  }, {} as IList)
}
