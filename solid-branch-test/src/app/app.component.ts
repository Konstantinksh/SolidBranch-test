import { Component } from '@angular/core';
import { IUser } from './models/user';
import { users } from './data/jsonviewer';
import { IList } from './models/list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tab: number;
  list: IList;
  constructor(private route: ActivatedRoute) { }
  
  title = 'Kanstantsin Krauchuk';
  subtitle = 'SolidBranch test task';
  data: IUser[] = users.data;
  types = ['income', 'outcome', 'loan', 'investment'];
  buttons = ['Income', 'Outcome', 'Loan', 'Investments'];

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.tab = params.tab;
      this.list = this.data
        .reduce((acum, cur) => {
          if (cur.type !== this.types[this.tab]) return acum;
          const fullName = `${cur.name.first} ${cur.name.last}`;
          if (!acum[fullName]) {
            acum[fullName] = [cur.type, 1];
          } else {
            acum[fullName][1] += 1;
          }
          return acum;
        }, {} as IList);
    })

  }
}
