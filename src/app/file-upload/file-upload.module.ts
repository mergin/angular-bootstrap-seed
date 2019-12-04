import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileUploadRoutingModule } from './file-upload-routing.module';
import { FileUploadComponent } from './file-upload.component';
import { DragDropDirective } from '@app/_directives/drag-drop.directive';


@NgModule({
    declarations: [
        FileUploadComponent,
        DragDropDirective
    ],
    imports: [
        CommonModule,
        FileUploadRoutingModule
    ],
})
export class FileUploadModule { }
