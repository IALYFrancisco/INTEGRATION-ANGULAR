import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { SectionComponent } from './section/section.component';
import { SectionLeftComponent } from './section-left/section-left.component';
import { SectionRightComponent } from './section-right/section-right.component';
import { TitleComponent } from './section-left/title/title.component';
import { ParagrapheComponent } from './section-left/paragraphe/paragraphe.component';
import { BoutonsComponent } from './section-left/boutons/boutons.component';
import { IconsComponent } from './section-left/icons/icons.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    SectionComponent,
    SectionLeftComponent,
    SectionRightComponent,
    TitleComponent,
    ParagrapheComponent,
    BoutonsComponent,
    IconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
