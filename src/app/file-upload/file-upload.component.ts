import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

    files: File[] = [];
    // fileList: FileList = null;

    constructor() { }

    ngOnInit(): void { }

    onUploadFile(files: FileList): void {

        for (let index = 0; index < files.length; index++) {
            this.files.push(files.item(index));
        }

        console.log(files);
        console.log(this.files);
    }

    deleteAttachment(index: number): void {
        this.files.splice(index, 1);
    }
}
