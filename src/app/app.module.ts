import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PuzzleSizeSelectorComponent } from './puzzle-size-selector/puzzle-size-selector.component';
import { PuzzleViewComponent } from './puzzle-view/puzzle-view.component';
import { IdPipePipe } from './puzzle-view/id-pipe.pipe';
import { HitoriComponent } from './hitori/hitori.component';
import { HeyawakeComponent } from './heyawake/heyawake.component';
import { HitoriRulesComponent } from './hitori-rules/hitori-rules.component';
import { HeyawakeRulesComponent } from './heyawake-rules/heyawake-rules.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastsContainer } from './toast-manager/toasts-container.components';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'puzzle/:puzzle-type/:size', component: PuzzleViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PuzzleSizeSelectorComponent,
    LandingPageComponent,
    PuzzleViewComponent,
    IdPipePipe,
    HitoriComponent,
    HeyawakeComponent,
    HitoriRulesComponent,
    HeyawakeRulesComponent,
    ToastsContainer
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }