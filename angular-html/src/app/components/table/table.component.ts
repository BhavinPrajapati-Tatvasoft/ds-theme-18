import { CommonModule } from '@angular/common';
import { Component, Injectable, Input, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {
  MatPaginator,
  MatPaginatorIntl,
  MatPaginatorModule,
  MatPaginatorSelectConfig,
} from '@angular/material/paginator';
import { MAT_SELECT_CONFIG } from '@angular/material/select';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Subject } from 'rxjs';

export interface UserData {
  ProductName: string;
  Type: string;
  Color: string;
  Payment: string;
  Status: string;
}

const table_data: UserData[] = [
  {
    ProductName: 'Casual Shoes',
    Type: 'Shoes',
    Color: 'Red',
    Payment: '$499',
    Status: 'Accepted',
  },
  {
    ProductName: 'Sweat Shirt',
    Type: 'Cloth',
    Color: 'Black',
    Payment: '$99',
    Status: 'Rejected',
  },
  {
    ProductName: 'Jeans',
    Type: 'Cloth',
    Color: 'Blue',
    Payment: '$49',
    Status: 'Pending',
  },
  {
    ProductName: 'Sport Shoes',
    Type: 'Jordan',
    Color: 'Red',
    Payment: '$499',
    Status: 'Rejected',
  },
  {
    ProductName: 'Oversized Tshirt',
    Type: 'Cloth',
    Color: 'Red',
    Payment: '$499',
    Status: 'Accepted',
  },
  {
    ProductName: 'Casual Shoes',
    Type: 'Shoes',
    Color: 'Red',
    Payment: '$499',
    Status: 'Accepted',
  },
  {
    ProductName: 'Sweat Shirt',
    Type: 'Cloth',
    Color: 'Black',
    Payment: '$99',
    Status: 'Rejected',
  },
  {
    ProductName: 'Jeans',
    Type: 'Cloth',
    Color: 'Blue',
    Payment: '$49',
    Status: 'Pending',
  },
  {
    ProductName: 'Sport Shoes',
    Type: 'Jordan',
    Color: 'Red',
    Payment: '$499',
    Status: 'Rejected',
  },
  {
    ProductName: 'Oversized Tshirt',
    Type: 'Cloth',
    Color: 'Red',
    Payment: '$499',
    Status: 'Accepted',
  },
];

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  firstPageLabel = `First page`;
  itemsPerPageLabel = `Rows per page: `;
  lastPageLabel = `Last page`;

  nextPageLabel = 'Next page';
  previousPageLabel = 'Previous page';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return `1 - 10 of 100`;
    }
    return `${page + 1} - ${pageSize} of ${length}`;
  }
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    CommonModule,
    MatButtonModule,
    MatSortModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [
    { provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl },
    {
      provide: MAT_SELECT_CONFIG,
      useValue: { overlayClass: 'customClass' },
    },
  ],
})
export class TableComponent {
  @Input() paginationEnabled: boolean = false;
  @Input() tableClass: string;
  displayPagination!: boolean;
  displayedColumns: string[] = [
    'ProductName',
    'Type',
    'Color',
    'Payment',
    'Status',
    'Action',
  ];
  dataSource: MatTableDataSource<UserData>;
  paginationSelectConfig: MatPaginatorSelectConfig = {
    panelClass: 'pagination-menu',
  };
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator | null =
    null;
  @ViewChild(MatSort) sort: MatSort | null = null;
  constructor() {
    this.tableClass = '';
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(table_data);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
