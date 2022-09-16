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
  
  name = 'Kanstantsin Krauchuk, 2022.09.16';
  title = 'SolidBranch test task';
  data: IUser[] = users.data;
  personTypes = ['income', 'outcome', 'loan', 'investment'];  
  buttons = ['Income', 'Outcome', 'Loan', 'Investments'];

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.tab = params.tab;
      this.list = this.data
        .reduce((accumulator, current) => {
          if (current.type !== this.personTypes[this.tab]) return accumulator;
          const fullName = `${current.name.first} ${current.name.last}`;
          if (!accumulator[fullName]) {
            accumulator[fullName] = [current.type, 1];
          } else {
            accumulator[fullName][1] += 1;
          }
          return accumulator;
        }, {} as IList);
    })
  }
}
