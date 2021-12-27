import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

export enum ToastrStatus {
  success = 'app-notification-success',
  info = 'app-notification-info',
  warning = 'app-notification-warning',
  error = 'app-notification-error',
}

@Injectable({
  providedIn: 'root',
})
export class NotifierService {
  constructor(private snackbar: MatSnackBar) {}

  success(
    message: string,
    action: string = 'Ok',
    config?: MatSnackBarConfig
  ): void {
    this.snackbar.open(
      message,
      action,
      (config = {
        ...config,
        panelClass: ToastrStatus.success,
      })
    );
  }

  info(message: string, action?: string, config?: MatSnackBarConfig): void {
    this.snackbar.open(
      message,
      action,
      (config = {
        ...config,
        panelClass: ToastrStatus.info,
      })
    );
  }

  warning(message: string, action?: string, config?: MatSnackBarConfig): void {
    this.snackbar.open(
      message,
      action,
      (config = {
        ...config,
        panelClass: ToastrStatus.warning,
      })
    );
  }

  error(message: string, action?: string, config?: MatSnackBarConfig): void {
    this.snackbar.open(
      message,
      action,
      (config = {
        ...config,
        panelClass: ToastrStatus.error,
      })
    );
  }
}
