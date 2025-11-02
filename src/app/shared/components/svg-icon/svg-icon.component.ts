import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [],
  templateUrl: './svg-icon.component.html',
  styleUrl: './svg-icon.component.scss',
})
export class SvgIconComponent {
  @HostBinding('style.-webkit-mask-image')
  public _path!: string;

  @Input()
  public set path(filePath: string) {
    this._path = `url("${filePath}")`;
  }

  @HostBinding('style.width')
  @Input()
  width: string = '';

  @HostBinding('style.height')
  @Input()
  height: string = '';

  @HostBinding('style.background-color')
  @Input()
  color: string = 'currentColor';
}
