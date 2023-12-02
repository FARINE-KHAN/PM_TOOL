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
    const storedUserData = sessionStorage.getItem("user");
    if(storedUserData!=null){
      this.showDashboard=true;
    }else{
      this.showDashboard=false;
    }
    this.cd.detectChanges();
    this.items = [
      {
          label: 'Attendance',
          icon: 'pi pi-fw pi-file',
          items: [
              {
                  label: 'CheckIn/CheckOut',
                  icon: 'pi pi-fw pi-plus',
                  routerLink: '/dashboard/attendance'
                  // items: [
                  //     {
                  //         label: 'Bookmark',
                  //         icon: 'pi pi-fw pi-bookmark'
                  //     },
                  //     {
                  //         label: 'Video',
                  //         icon: 'pi pi-fw pi-video'
                  //     }
                  // ]
              },
              // {
              //     label: 'Delete',
              //     icon: 'pi pi-fw pi-trash'
              // },
              // {
              //     label: 'Export',
              //     icon: 'pi pi-fw pi-external-link'
              // }
          ]
    //   },
    //   {
    //       label: 'Edit',
    //       icon: 'pi pi-fw pi-pencil',
    //       items: [
    //           {
    //               label: 'Left',
    //               icon: 'pi pi-fw pi-align-left'
    //           },
    //           {
    //               label: 'Right',
    //               icon: 'pi pi-fw pi-align-right'
    //           },
    //           {
    //               label: 'Center',
    //               icon: 'pi pi-fw pi-align-center'
    //           },
    //           {
    //               label: 'Justify',
    //               icon: 'pi pi-fw pi-align-justify'
    //           }
    //       ]
    //   },
    //   {
    //       label: 'Users',
    //       icon: 'pi pi-fw pi-user',
    //       items: [
    //           {
    //               label: 'New',
    //               icon: 'pi pi-fw pi-user-plus'
    //           },
    //           {
    //               label: 'Delete',
    //               icon: 'pi pi-fw pi-user-minus'
    //           },
    //           {
    //               label: 'Search',
    //               icon: 'pi pi-fw pi-users',
    //               items: [
    //                   {
    //                       label: 'Filter',
    //                       icon: 'pi pi-fw pi-filter',
    //                       items: [
    //                           {
    //                               label: 'Print',
    //                               icon: 'pi pi-fw pi-print'
    //                           }
    //                       ]
    //                   },
    //                   {
    //                       icon: 'pi pi-fw pi-bars',
    //                       label: 'List'
    //                   }
    //               ]
    //           }
    //       ]
    //   },
    //   {
    //       label: 'Events',
    //       icon: 'pi pi-fw pi-calendar',
    //       items: [
    //           {
    //               label: 'Edit',
    //               icon: 'pi pi-fw pi-pencil',
    //               items: [
    //                   {
    //                       label: 'Save',
    //                       icon: 'pi pi-fw pi-calendar-plus'
    //                   },
    //                   {
    //                       label: 'Delete',
    //                       icon: 'pi pi-fw pi-calendar-minus'
    //                   }
    //               ]
    //           },
    //           {
    //               label: 'Archieve',
    //               icon: 'pi pi-fw pi-calendar-times',
    //               items: [
    //                   {
    //                       label: 'Remove',
    //                       icon: 'pi pi-fw pi-calendar-minus'
    //                   }
    //               ]
    //           }
    //       ]
      }
  ];
  }
  public sidebarVisible:boolean=true;
}
