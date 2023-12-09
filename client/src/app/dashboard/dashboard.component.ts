import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit  {
  public items: MenuItem[] = [];
  showDashboard: boolean =false;
  constructor(
    private cd: ChangeDetectorRef,
  ) {
   
  }
  ngOnInit(): void {
    
  }
  public sidebarVisible:boolean=true;
}
