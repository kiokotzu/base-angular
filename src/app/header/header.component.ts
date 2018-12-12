import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {

  constructor(private translate: TranslateService) { }

  public changeTranslate(code_iso: string): void {
    this.translate.use(code_iso);
  }

}
