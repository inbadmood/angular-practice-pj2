import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { CustomMaterialModule } from '../custom-material.module';
import { CalendarComponent } from './calendar/calendar.component';
import { DocComponent } from './doc/doc.component';
import { NotebookComponent } from './notebook/notebook.component';
import { SearchComponent } from './search/search.component';
import { DonateComponent } from './donate/donate.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CustomMaterialModule
  ],
  declarations: [HomeComponent, HeaderComponent, AsideComponent, CalendarComponent, DocComponent, NotebookComponent, SearchComponent, DonateComponent, ContactComponent]
})
export class HomeModule { }
