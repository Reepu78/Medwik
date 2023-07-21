import { NgModule } from '@angular/core';
import { CommonModule,NgIf } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';


// import {ErrorStateMatcher} from '@angular/material/core';
// import {MatInputModule} from '@angular/material/input';
// import {MatSelectModule} from '@angular/material/select';
// import {MatFormFieldModule} from '@angular/material/form-field';



const material = [
    // MatFormFieldModule,
    // MatSelectModule,
    // MatInputModule,
    // ErrorStateMatcher,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        material
      
    ],
    exports: [
        material
    ],
    
  })
  export class MaterialModule { }