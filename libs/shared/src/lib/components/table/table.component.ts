// FOR REFERENCE CHECK THE LINK BELOW:
// https://betterprogramming.pub/angular-material-build-your-own-generic-mattable-a49ba68a375a
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { ColumnModel, TableModel } from '@nx-angular-boilerplate/models';
import {
  deepClone,
  tableSymbol,
  _orderBy,
  _sortBy,
} from '@nx-angular-boilerplate/utils';

@Component({
  selector: 'nx-angular-boilerplate-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  private _data!: any[];
  private _tableModel!: TableModel;
  private _originalData: any[] = [];
  columns!: ColumnModel[];
  displayedColumns!: string[];

  @Input() set data(values: any[]) {
    if (values && values.length > 0) {
      this._data = deepClone(values);
      this._tableModel = this._data[0][tableSymbol];
      this.buildColumns();
      if (!this._originalData.length) {
        // Keep original order of data
        this._originalData = deepClone(this._data);
      }
    }
  }
  get data(): any[] {
    return this._data;
  }

  sortData(params: any) {
    const direction: SortDirection = params.direction;
    this.data = direction
      ? _orderBy(this.data, [params.active], [direction])
      : this._originalData;
  }

  private buildColumns() {
    this.columns = this._tableModel.columns;
    this.sortColumns();
    this.displayedColumns = this.columns.map((col) => col.key);
  }

  private sortColumns() {
    this.columns = _sortBy(this.columns, ['order']);
  }
}
