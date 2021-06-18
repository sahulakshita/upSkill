import { Component, OnInit } from '@angular/core';
import { FileUploadService } from './file-upload.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  shortLink: string =" ";
  loading: boolean = false;
  file!:File;
  Uploaded:string="";

  constructor(private fileUploadService: FileUploadService) { }
  ngOnInit() : void {
  }

  onChange(event) {
    if (this.file = event.target.files &&
      event.target.files[0]) {
        var reader = new FileReader();

        reader.readAsDataURL(event.target.files[0])
        
      };
  }
  onUpload(){
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
      (event : any) => {
        if (typeof(event) === 'object'){
          this.shortLink = event.link;
        
          this.loading = false;
        }
      }
    );
    }
}