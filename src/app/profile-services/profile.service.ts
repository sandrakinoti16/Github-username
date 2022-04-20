import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppModule } from '../app.module';
import { environment } from '../../environments/environment';

export class ProfileService {
  updateName(username: string) {
    throw new Error('Method not implemented.');
  }
  getRepos() {
    throw new Error('Method not implemented.');
  }
  getUsers() {
    throw new Error('Method not implemented.');
  }
  user!: import("/home/sandra/Desktop/Github-username/src/app/user-class/user").User;
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));