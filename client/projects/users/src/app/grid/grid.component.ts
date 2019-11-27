import { Component, OnInit, ViewChild } from '@angular/core';
import {AllCommunityModules} from '@ag-grid-community/all-modules';
import { AgGridAngular } from '@ag-grid-community/angular';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  columnDefs = [
    { headerName: 'Make', field: 'make' , sortable : true, filter : true, checkboxSelection: true },
    { headerName: 'Model', field: 'model' , sortable : true, filter : true},
    { headerName: 'Price', field: 'price' , sortable : true, filter : true}
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  modules = AllCommunityModules;

  @ViewChild('agGrid', {static : false}) agGrid: AgGridAngular;
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
}

  constructor() { }

  ngOnInit() {
  }

}
