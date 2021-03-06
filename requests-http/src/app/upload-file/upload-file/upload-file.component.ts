import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { filterResponse, uploadProgress } from 'src/app/shared/rxjs-operators';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnInit {
  files: Set<File>;
  progress = 0;

  constructor(private service: UploadFileService) {}

  ngOnInit() {}

  onChange(event) {
    const selectedFiles = <FileList>event.srcElement.files;
    document.getElementById('customFile').innerHTML = selectedFiles[0].name;

    const fileNames = [];
    this.files = new Set();
    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames.push(selectedFiles[i].name);
      this.files.add(selectedFiles[i]);
    }
    document.getElementById('customFile').innerHTML = fileNames.join(', ');
    this.progress = 0;

    console.log(selectedFiles);
  }

  onUpload() {
    if (this.files && this.files.size > 0) {
      this.service
        .upload(this.files, environment.BASE_URL + '/upload')
        .pipe(
          uploadProgress((progress) => {
            console.log(progress);
            this.progress = progress;
          }),
          filterResponse()
        )
        .subscribe((response) => console.log('upload concluido'));

      // .subscribe((event: HttpEvent<Object>) => {
      //   console.log(event)
      //   if (event.type == HttpEventType.Response) {
      //     console.log('upload concluido');
      //   } else if (event.type == HttpEventType.UploadProgress) {
      //     const percentDode = Math.round((event.loaded * 100) / event.total);
      //     //console.log(percentDode)
      //     this.progress = percentDode;
      //   }
      // });
    }
  }

  onDownloadExcel() {
    this.service
      .download(environment.BASE_URL + '/downloadExcel')
      .subscribe((res: any) => {
        this.service.handleFile(res, 'rodizio.xlsx')
      });
  }

  onDownloadPdf() {
    this.service
      .download(environment.BASE_URL + '/downloadPdf')
      .subscribe((res: any) => {
        this.service.handleFile(res, 'openapi.pdf')
      });
  }
}
