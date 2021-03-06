import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from "@angular/material";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material';
import {MatTabsModule} from '@angular/material';
// 引入第三方共享模块
import { SharedModule } from "../../shared/shared.module";
import { DeviceItemComponent } from './device-item/device-item.component';
import { DeviceListPageComponent } from './device-list-page/device-list-page.component';
import { DeviceEditComponent } from './device-edit/device-edit.component';
import { DeviceDatagridComponent } from './device-datagrid/device-datagrid.component';
import { DeviceService } from './device.service';

@NgModule({
  imports: [
    CommonModule,FormsModule,
    SharedModule,MatButtonModule,
    MatTableModule,
    MatTabsModule,
    RouterModule.forChild([
      { path: '', component: DeviceListPageComponent, pathMatch: 'full' },
       { path: 'edit/:name', component: DeviceEditComponent, pathMatch: 'full' }
    ])
  ],
  providers:[DeviceService],
  declarations: [DeviceItemComponent,DeviceListPageComponent,DeviceEditComponent,DeviceDatagridComponent]
})
export class DeviceModule { }
