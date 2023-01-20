import { Component, OnInit ,Input, Inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';
import { environment } from 'src/environments/environment';
import { __values } from 'tslib';
import { DatePipe } from '@angular/common';
import { ShowTableComponent } from '../show-table/show-table.component';
export class Constants {
  static readonly DATE_FMT = 'dd/MMM/yyyy';}
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  // currentDate=new Date;
  hotelbool:any;
  reserveForm: any
  masterdata: any;
  selectedhotel: any;
  noofguests: any;
  calculatedtype:any;
  
  // onSubmit() {
  //   console.warn(this.reserveForm.value);
  // }
  constructor(private matDialogref:MatDialogRef<AddEditComponent[]>,private service:SharedService,@Inject (MAT_DIALOG_DATA) public data:any) { }
  @Input() res:any;
  S_No:number|any;
  Hotel!:string;
   Arrival!:string;
  Departure!:string;
  Type!: string;
  Guests!:number;
  Price!:number;
 
  onClose(){
    this.matDialogref.close()
  }
  ngOnInit(): void {
    this.reserveForm = new FormGroup({
      S_No: new FormControl(''),
      Hotel: new FormControl(''),
      Arrival:new FormControl(''),
      Departure:new FormControl(''),
      Type: new FormControl(''),
      Guests:new FormControl(''),
      Price:new FormControl('')
    });
    if(this.data){
    let Adate = this.data.Arrival.split('T');
      let Ddate = this.data.Departure.split('T');

      this.reserveForm.patchValue({
        S_No: this.data.S_No,
        Hotel: this.data.Hotel,
        Arrival: Adate[0],
        Departure: Ddate[0],
        Type: this.data.Type,
        Guests: this.data.Guests,
        Price: this.data.Price,
      });
    }
  }
  addList(){
    let ser=JSON.stringify(this.reserveForm.value);
    this.service.addList(ser);
    window.location.reload();
  }
  calculateprice(){
    for(var i=0;i<this.masterdata.length;i++){
      if(this.masterdata[i].Hotel==this.selectedhotel){
        let Type=this.masterdata[i].Type;
        this.reserveForm.patchValue({type:Type});
      }
    }
  }
  getguests(){
    let a=this.clc()
  }
 clc(){
  for(var i=0;i<this.masterdata.length;i++){
    if(this.masterdata[i].Hotel==this.selectedhotel){
      let Price=this.masterdata[i].Price;
      Price=Price*this.noofguests;
      let type=this.masterdata[i].type;
      this.reserveForm.patchValue({Price:Price});
    }
  }
 }
  clear(){
    console.log("ok")
  }
}
