import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

    files: any = [];

    constructor() { }

    ngOnInit(): void { }

    onUploadFile(files: File[]): void {
        for (const file of files) {
            this.files.push(file.name);
        }
        console.log(files);
    }

    deleteAttachment(index: number): void {
        this.files.splice(index, 1);
    }
}
