import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ErrorComponent } from './error/error.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    HomeComponent,
    ErrorComponent,
    BlogComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    ErrorComponent,
    BlogComponent,
    AboutComponent
  ]
})
export class PagesModule { }
