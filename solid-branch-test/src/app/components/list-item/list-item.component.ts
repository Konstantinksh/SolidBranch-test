import { Component, Input } from "@angular/core"

@Component ({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html'
})

export class ListItemComponent {
  @Input() person: string;
  @Input() count: number;
}