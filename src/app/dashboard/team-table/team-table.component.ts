import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamService } from './team-table.service';

@Component({
  selector: 'app-team-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-table.component.html',
  styleUrl: './team-table.component.scss'
})
export class TableComponent implements OnInit {
  columns: any[] = [];
  data: any[] = [];
  pagedData: any[] = [];

  currentPage = 1;
  pageSize = 10;

  selectedRows = new Set<string>();
  showPopup = false;
  popupName = '';
  deleteName = '';
  showDeletePopup =false;
  deleteId='';
  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.teamService.getTeam().subscribe(res => {
      this.columns = res.grid_columns;
      this.data = res.grid_data;
      this.updatePagedData();
    });
  }

  updatePagedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedData = this.data.slice(start, end);
  }

  totalPages(): number {
    return Math.ceil(this.data.length / this.pageSize);
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages()) return;
    this.currentPage = page;
    this.updatePagedData();
  }

  toggleSelectAll(checked: boolean) {
    this.selectedRows.clear();
    if (checked) {
      this.pagedData.forEach(user => this.selectedRows.add(user.id));
    }
  }

  toggleRowSelection(id: string) {
    this.selectedRows.has(id) ? this.selectedRows.delete(id) : this.selectedRows.add(id);
  }

  openPopup(user: any) {
    this.popupName = `${user.name.first_name} ${user.name.last_name}`;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  opendeletePopup( id: string,name: string) {
    this.deleteName = name;
    this.deleteId = id;
    this.showDeletePopup =true;
  }
  closeDeletePopup(){
    this.showDeletePopup =false;
  }
  deleteUser(){
      this.data = this.data.filter(user => user.id !== this.deleteId);
      this.selectedRows.delete(this.deleteId);
      this.updatePagedData();
      this.showDeletePopup =false;

  }
  

  onSelectAllChange(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.toggleSelectAll(checked);
  }

  getTagStyles(tag: any) {
    return {
      'background-color': tag.background_color,
      'color': tag.text_color
    };
  }
  getStatusStyles(status: any) {
    if(status=='Customer'){
      return {
        'justify-content' : 'center',
        'background-color': '#e6f4ea', 
        'color': '#2e7d32',
        'width': '75px'
      };
    }else if(status=='Churned'){
      return {
        'background-color': '#f0f1f5',
        'color': '#5f6368',
        'justify-content' : 'center',
        'width': '75px'
      };
    }
    
    else{
      return {
        'background-color': 'none',
        'color': 'black',
        'width': '115px'

      };
    }
   
  }

  getDotStyles(status:any){
    if(status=='Customer'){
      return {
        'background-color': '#4caf50'
      };
    }else if(status=='Churned'){
      return {
        'background-color': '#5f6368'
      };
    }
    else{
      return {
        'background-color': 'white',
      };
    }
  }
}

