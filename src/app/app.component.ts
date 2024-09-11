import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient,  './assets/i18n/', '.json');
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, TranslateModule],
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    // Use browser lang for translate
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');

    const browserLang: string = translate.getBrowserLang()!;
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }
}
