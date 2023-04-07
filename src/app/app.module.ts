import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgIconsModule } from '@ng-icons/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HomeModule } from './pages/home/home.module';
import { IconsManager } from './utils/IconsManager';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ComponentsModule,
    NgIconsModule.withIcons(IconsManager.getIcons()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
