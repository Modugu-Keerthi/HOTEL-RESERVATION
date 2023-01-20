import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  reserveForm: any;

  constructor(private dialog:MatDialog,
    private res:SharedService,@Inject ( MAT_DIALOG_DATA) public data:any) { }
  ngOnInit(): void {

  }
onNo()
{

}
onOk()
  {
    console.log(this.data)
    this.res.deleteList(this.data.S_No).subscribe();
    window.location.reload();
    console.log("ok");
  }
}
