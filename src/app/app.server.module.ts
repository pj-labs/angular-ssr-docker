import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {AppComponent} from './app.component';
import {provideClientHydration} from '@angular/platform-browser';

@NgModule({
  imports: [
    ServerModule,
  ],
  providers:[provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppServerModule {
}
