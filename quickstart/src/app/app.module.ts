import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  }  from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent }  from './app.component';
import { memberDetailComponent } from './member-detail.component';
import { membersComponent } from './members.component';
import { memberService } from './member.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent} from './dashboard.component'; 
import { memberSearchComponent } from './member-search.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, AppRoutingModule,InMemoryWebApiModule.forRoot(InMemoryDataService)],
  declarations: [ AppComponent, memberDetailComponent, membersComponent, DashboardComponent, memberSearchComponent ],
  providers:    [ memberService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
}
