import { APP_ID, enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { bootstrapApplication } from '@angular/platform-browser';

if (environment.production) {
	enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
	bootstrapApplication(AppComponent, {
		providers: [
			importProvidersFrom(AppRoutingModule),
			{ provide: APP_ID, useValue: 'serverApp' },
			provideHttpClient(withInterceptorsFromDi()),
			provideAnimations(),
		],
	}).catch((err) => console.error(err));
});
