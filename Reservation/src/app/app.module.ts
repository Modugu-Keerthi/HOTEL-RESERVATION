import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ShowTableComponent } from './login/show-table/show-table.component';
import { AddEditComponent } from './login/add-edit/add-edit.component';
import { DeleteComponent } from './login/delete/delete.component';
import { SharedService } from './shared.service';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatTableModule} from '@angular/material/table';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatDialogModule} from '@angular/material/dialog'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatPaginatorModule } from '@angular/material/paginator';
import{MatToolbarModule}from '@angular/material/toolbar'
import { MatSortModule } from '@angular/material/sort';
import{MatIconModule} from'@angular/material/icon';
import{MatChipsModule} from'@angular/material/chips';
import{MatAutocompleteModule } from '@angular/material/autocomplete';
import{MatInputModule} from '@angular/material/input'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShowTableComponent,
    AddEditComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSortModule,
    MatIconModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
