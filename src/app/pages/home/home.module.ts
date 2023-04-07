import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgIconsModule } from '@ng-icons/core';

import { DirectivesModule } from 'src/app/directives/directives.module';
import { IconsManager } from 'src/app/utils/IconsManager';
import { HomeRoutingModule } from './home-routing.module';

import { ComponentsModule } from 'src/app/components/components.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    DirectivesModule,
    NgIconsModule.withIcons(IconsManager.getIcons()),
  ],
})
export class HomeModule {}
