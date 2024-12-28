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
      filter: true,
      flex: 2,
      minWidth: 150
    },
    { 
      field: 'land', 
      headerName: 'Country', 
      filter: 'agTextColumnFilter',
      flex: 1.5,
      minWidth: 120
    },
    { 
      field: 'co2', 
      headerName: 'CO2 Emissions', 
      filter: 'agNumberColumnFilter',
      flex: 1,
      minWidth: 120      
    },
    { 
      field: 'jahr', 
      headerName: 'Year', 
      filter: 'agNumberColumnFilter',
      flex: 1,
      minWidth: 100
    }
  ];

  removeHtmlTags(input: string): string {
    if (!input) return '';
    return input.replace(/<\/?[^>]+(>|$)/g, "").trim(); // Regex to remove HTML tags
  }

  customFilterParams = {
    // Override the text filter's filter function
    filter: (filterValue: string, cellValue: string) => {
      const sanitizedFilterValue = this.removeHtmlTags(filterValue); // Sanitize the filter text
      const sanitizedCellValue = this.removeHtmlTags(cellValue); // Sanitize the cell text
      return sanitizedCellValue.toLowerCase().includes(sanitizedFilterValue.toLowerCase());
    },
  };

  defaultColDef: ColDef = {
    resizable: true,
    floatingFilter: false,
    sortable: true, 
    filterParams: this.customFilterParams, // Use custom filter params
  };

  gridOptions: GridOptions = {
    rowHeight: 48,
    headerHeight: 48,
    suppressMovableColumns: false,
    enableCellTextSelection: true,
    pagination: false // Disable pagination to show scrollbar    
  };

  ngOnInit() {
    this.emissionValues = emissionData.map(item => ({
      jahr: item.jahr,
      name: this.removeHtmlTags(item.name),
      land: this.removeHtmlTags(item.land),
      co2: item.co2,
    }));
  }
}