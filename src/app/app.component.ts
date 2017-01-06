/*
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  template: `
    <nav>
      <span>
        <a [routerLink]=" ['./'] ">
          Index
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./home'] ">
          Home
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./detail'] ">
          Detail
        </a>
      </span>
      |
      <span>
        <a [routerLink]=" ['./about'] ">
          About
        </a>
      </span>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
    <div>{{ 'HELLO' | translate:param }}</div>
    <footer>
      <span>WebPack Angular 2 Starter</span>
    </footer>
  `
})
export class AppComponent implements OnInit{
  param = {value: 'world'};
  name = 'Angular 2 boilerplate';

  constructor(
    public appState: AppState, translate: TranslateService) {
      var userLang = navigator.language; 
      userLang = userLang.split("-")[0];
      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang("en");
      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(userLang);
  }

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

