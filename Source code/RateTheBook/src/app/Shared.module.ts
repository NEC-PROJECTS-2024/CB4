import { NgModule } from "@angular/core";

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BookComponent } from './Components/Utils/book/book.component';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [BookComponent],
    imports: [
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatTooltipModule,
        MatRippleModule,
        MatBadgeModule,
        MatPaginatorModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule, CommonModule
    ],
    exports: [
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatTooltipModule,
        MatRippleModule,
        MatBadgeModule,
        MatPaginatorModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule, ReactiveFormsModule, CommonModule,
        BookComponent]
})
export class SharedModule { }