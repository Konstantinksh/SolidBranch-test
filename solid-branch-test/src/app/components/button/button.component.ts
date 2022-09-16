import { Component, Input } from "@angular/core"
import {  Router } from '@angular/router';

@Component ({
  selector: 'app-button',
  templateUrl: './button.component.html'
})

export class ButtonComponent {
  constructor() { }
  @Input() button: string
}