import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconsModule } from '@ng-icons/core';
import { DirectivesModule } from '../directives/directives.module';
import { IconsManager } from '../utils/IconsManager';
import { HboHeaderComponent } from './hbo-header/hbo-header.component';
import { HboIconComponent } from './hbo-icon/hbo-icon.component';
import { HboAvatarComponent } from './hbo-avatar/hbo-avatar.component';
import { HboNavigationComponent } from './hbo-navigation/hbo-navigation.component';

@NgModule({
  declarations: [
    HboIconComponent,
    HboHeaderComponent,
    HboAvatarComponent,
    HboNavigationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    DirectivesModule,
    NgIconsModule.withIcons(IconsManager.getIcons()),
  ],
  exports: [
    HboIconComponent,
    HboHeaderComponent,
    HboAvatarComponent,
    HboNavigationComponent,
  ],
})
export class ComponentsModule {}
