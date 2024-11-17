import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { ListCategoriesComponentComponent } from './components/list-categories-component/list-categories-component.component';
import { FilterPipe } from './pipe/filter.pipe';
import { HighlightDirective } from './highlight.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductModule } from './features/product/product.module';
import { FilterProductPipe } from './pipe/filter-product.pipe';
import { ProfileComponent } from './components/profile/profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormCategoryComponent } from './components/form-category/form-category.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { TestComponent } from './components/test/test.component';
import { CategoryComponent } from './components/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavbarComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    ListCategoriesComponentComponent,
    FilterPipe,
    HighlightDirective,
    NotFoundComponent,
    FormCategoryComponent,
    CategoryComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TestComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
