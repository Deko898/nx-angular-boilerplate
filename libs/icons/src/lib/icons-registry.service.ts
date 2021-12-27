import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SvgIconType } from './icon.enum';

@Injectable({
  providedIn: 'root',
})
export class IconsRegistryService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  addSvgIcon(svgIconType: SvgIconType, svgPathName: string) {
    this.matIconRegistry.addSvgIcon(
      svgIconType,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `/assets/svg/${svgPathName}.svg`
      )
    );
  }
}
