import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutService } from './services/logout.service';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientService } from './services/http-client.service';
import { PermissionsService } from './services/permissions.service';
import { AuthenticationService } from './services/authentication.service';
import { InformationService } from "./services/information.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
  ],
  providers: [
    LogoutService,
    HttpClientService,
    PermissionsService,
    AuthenticationService,
    InformationService
  ],
  exports: [
    TranslateModule
  ]
})
export class SharedModule { }
