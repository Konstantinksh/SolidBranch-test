import { Component, Input } from "@angular/core"
import { ActivatedRoute } from '@angular/router';

@Component ({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html'
})

export class AppNavigator {
  constructor(private route: ActivatedRoute) { }
  @Input() buttons: string[]
}