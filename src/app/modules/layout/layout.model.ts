import { Injectable } from '@angular/core';
import { ApplicationModel } from '@app/application.model';
import { LoadUser } from '@store/actions/global/user.action';

@Injectable()
export class LayoutModel extends ApplicationModel {


  public fetchUserName(name: string): void {
    this.store.dispatch(new LoadUser(name));
  }

}
