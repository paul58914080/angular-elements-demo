import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  @Input() title = 'angular-elements-demo';
}
