import { Component, Input } from "@angular/core"
import { IList } from "src/app/models/list";
import { ActivatedRoute } from '@angular/router';
import { IUser } from "src/app/models/user";

@Component ({
  selector: 'app-table',
  templateUrl: './table.component.html'
})

export class Table {
  paramsSubscription: any;
  constructor(private route: ActivatedRoute) { }
  private tab: number;
  public list: IList;
  @Input() data: IUser[];
  private personTypes = ['income', 'outcome', 'loan', 'investment'];  
  
  ngOnInit() {
    this.paramsSubscription = this.route.queryParams.subscribe(params => {
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

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}