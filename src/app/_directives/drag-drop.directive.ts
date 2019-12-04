import {
    Directive,
    Output,
    HostBinding,
    EventEmitter,
    HostListener
} from '@angular/core';

@Directive({
    selector: '[appDragDrop]'
})
export class DragDropDirective {

    @Output() fileDropped: EventEmitter<FileList> = new EventEmitter<FileList>();

    @HostBinding('style.background-color') private background: string = '#f5fcff';
    @HostBinding('style.opacity') private opacity: string = '1';

    // Dragover listener
    @HostListener('dragover', ['$event'])
    onDragOver(evt: DragEvent): void {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#9ecbec';
        this.opacity = '0.8';
    }

    // Dragleave listener
    @HostListener('dragleave', ['$event'])
    onDragLeave(evt: DragEvent): void {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f5fcff';
        this.opacity = '1';
    }

    // Drop listener
    @HostListener('drop', ['$event'])
    ondrop(evt: DragEvent): void {
        evt.preventDefault();
        evt.stopPropagation();
        this.background = '#f5fcff';
        this.opacity = '1';
        const files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.fileDropped.emit(files);
        }
    }
}
