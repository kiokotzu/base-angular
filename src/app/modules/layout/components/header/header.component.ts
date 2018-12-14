import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { LoadUser } from '@store/actions/global/user.action';
import { LayoutModel } from '@modules/layout/layout.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {


  constructor(
    private translate: TranslateService,
    private model: LayoutModel
  ) { }

  public changeTranslate(code_iso: string): void {
    this.translate.use(code_iso);
    this.model.fetchUserName('Esteban');
  }

}
