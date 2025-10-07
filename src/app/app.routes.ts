import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { RequestsComponent } from './requests/requests.component';
import { DocumentsComponent } from './documents/documents.component';
import { LogsComponent } from './logs/logs.component';

export const routes: Routes = [
  { path: '', redirectTo: 'equipment', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'equipment', component: EquipmentComponent, data: { text: 'Equipment' } },
  { path: 'requests', component: RequestsComponent, data: { text: 'Requests' } },
  { path: 'documents', component: DocumentsComponent, data: { text: 'Documents' } },
  { path: 'logs', component: LogsComponent, data: { text: 'Logs' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
