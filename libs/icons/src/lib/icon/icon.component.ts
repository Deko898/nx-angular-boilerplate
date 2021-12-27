import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'nx-angular-boilerplate-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input() svgIcon!: string;
  @Input() iconType!: string;
}
