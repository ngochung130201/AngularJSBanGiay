import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EditorModule } from "@tinymce/tinymce-angular";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { SlideComponent } from './slide/slide.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { ProductComponent } from './product/product.component';
import { BlogComponent } from './blog/blog.component';
import {AppRoutingModule} from './app-routing.module'

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { IndexProductComponent } from './admin/index-product/index-product.component';
import { AddCategoryComponent } from './admin/Category/add-category/add-category.component';
import { EditCategoryComponent } from './admin/Category/edit-category/edit-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderAdminComponent } from './admin/header-admin/header-admin.component';
import { AddAboutComponent } from './admin/add-about/add-about.component';
import { IndexAboutComponent } from './admin/index-about/index-about.component';
import { SidebarAdminComponent } from './admin/sidebar-admin/sidebar-admin.component';
import { PaginationComponent } from './admin/pagination/pagination.component';
import { CreateAboutComponent } from './admin/about/create-about/create-about.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from './footer/footer.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { CategoryComponent } from './category/category.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { AddBlogComponent } from './admin/blog/add-blog/add-blog.component';
import { EditBlogComponent } from './admin/blog/edit-blog/edit-blog.component';
import { IndexCategoryComponent } from './admin/Category/index-category/index-category.component';
import { IndexblogComponent } from './admin/blog/indexblog/indexblog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginService } from './services/login.service';
import {AuthGuard} from './auth.guard'
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SlideComponent,
    ContactComponent,
    AboutComponent,
    AddProductComponent,
    ProductComponent,
    BlogComponent,
    ProductDetailComponent,
    EditProductComponent,
    IndexProductComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    HeaderAdminComponent,
    AddAboutComponent,
    IndexAboutComponent,
    SidebarAdminComponent,
    PaginationComponent,
    CreateAboutComponent,
    FooterComponent,
    CategoryComponent,
    BlogdetailComponent,
    AddBlogComponent,
    EditBlogComponent,
    IndexCategoryComponent,
    IndexblogComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgImageSliderModule,
    EditorModule,
    FormsModule,



  ],
  providers: [LoginService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
