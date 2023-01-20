import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { AddEditComponent } from '../add-edit/add-edit.component';
import{MatDialog} from '@angular/material/dialog';
import { DeleteComponent } from '../delete/delete.component';
import { Route, Router } from '@angular/router';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

// export interface Reservation {
//   S_No:number,
//   Hotel:string,
//   Arrival:Date,
//   Departure:Date,
//   Type:string,
//   Guests:number,
//   Price:number,
//   Manage:string
//   }
  
//   const ELEMENT_DATA: Reservation[] = [
  
//   ];

@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.css']
})
export class ShowTableComponent implements OnInit {
  
  loginForm!: FormGroup;
  // data: any =new MatTableDataSource();
  displayedColumns: string[] = ['S_No', 'Hotel', 'Arrival', 'Departure','Type','Guests','Price','Manage'];
  datasource!:MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matsort!: MatSort;
  // dataSource = ELEMENT_DATA;
  constructor(private service:SharedService,private dialog:MatDialog,private route:Router,private _liveAnnouncer: LiveAnnouncer) {
   }
  List:any=[];
  ngOnInit(): void {
    this.service.getList().subscribe(data=>{
    this.List=data;
    // });
      this.datasource=new MatTableDataSource(data)
    this.datasource.sort = this.matsort;
    this.datasource.paginator = this.paginator;
    })
  }
  openAdd(){
    this.dialog.open(AddEditComponent,{
      height:"80%",
      width:"60%"
    });
  }
  logout(){
    this.route.navigate(['']);
  }
  refreshList(){
  
  }
  openEdit(value: number){
    this.dialog.open(AddEditComponent,{
      height:"80%",
      width:"60%",
      data:value
    });
  }
  openDelete(value:any){
    this.dialog.open(DeleteComponent,{
      height:"30%",
      width:"50%",
      data:value
    });
    console.log(value)
  }
  filterData($event:any){
    this.datasource.filter=$event.target.value;
  }

  

}
