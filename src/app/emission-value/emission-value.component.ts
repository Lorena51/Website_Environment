import { Component, OnInit } from '@angular/core';
import { IEmissionValue } from './emission-value.Model';
import { ColDef, GridOptions } from 'ag-grid-community';
import emissionData from './csvjson.json';

@Component({
  selector: 'env-emission-value',
  templateUrl: './emission-value.component.html',
  styleUrls: ['./emission-value.component.css']
})
export class EmissionValueComponent implements OnInit {
  emissionValues: IEmissionValue[] = [];
  
  columnDefs: ColDef[] = [
    { 
      field: 'name', 
      headerName: 'Company Name', 
      sortable: true, 
      filter: true,
      flex: 2,
      minWidth: 150
    },
    { 
      field: 'land', 
      headerName: 'Country', 
      sortable: true, 
      filter: true,
      flex: 1.5,
      minWidth: 120
    },
    { 
      field: 'co2', 
      headerName: 'CO2 Emissions', 
      sortable: true, 
      filter: 'agNumberColumnFilter',
      flex: 1,
      minWidth: 120
    },
    { 
      field: 'jahr', 
      headerName: 'Year', 
      sortable: true, 
      filter: 'agNumberColumnFilter',
      flex: 1,
      minWidth: 100
    }
  ];

  defaultColDef: ColDef = {
    resizable: true,
    floatingFilter: true
  };

  gridOptions: GridOptions = {
    rowHeight: 48,
    headerHeight: 48,
    suppressMovableColumns: true,
    enableCellTextSelection: true,
    pagination: false // Disable pagination to show scrollbar
  };

  ngOnInit() {
    this.emissionValues = emissionData;
  }
}
