import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injector, DoBootstrap } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { DetailComponent } from './components/detail/detail.component';
import { OpportunityHeaderComponent } from './micro-ui/opportunity-header/opportunity-header.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    DetailComponent,
    OpportunityHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const formOneElement = createCustomElement(OpportunityHeaderComponent, { injector: this.injector });
    customElements.define('microui-form', formOneElement);

    // const formTwoElement = createCustomElement(DetailComponent, { injector: this.injector });
    // customElements.define('second-component', formTwoElement);
  }
}