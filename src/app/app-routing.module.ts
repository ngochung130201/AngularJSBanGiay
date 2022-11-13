import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CreateAboutComponent } from './admin/about/create-about/create-about.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AddBlogComponent } from './admin/blog/add-blog/add-blog.component';
import { EditBlogComponent } from './admin/blog/edit-blog/edit-blog.component';
import { IndexblogComponent } from './admin/blog/indexblog/indexblog.component';
import { AddCategoryComponent } from './admin/Category/add-category/add-category.component';
import { EditCategoryComponent } from './admin/Category/edit-category/edit-category.component';
import { IndexCategoryComponent } from './admin/Category/index-category/index-category.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { IndexAboutComponent } from './admin/index-about/index-about.component';
import { IndexProductComponent } from './admin/index-product/index-product.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'trang-chu',component: HomeComponent},
  {path:'lien-he',component:ContactComponent},
  {path:'gioi-thieu',component:AboutComponent},
  {path:'san-pham',component:ProductComponent},
  {path:'tin-tuc',component:BlogComponent},
  {path:'san-pham/:id',component:ProductDetailComponent},
  {path:'admin', component:IndexProductComponent},
   {path:'admin/san-pham/index',component:IndexProductComponent},
  {path:'admin/san-pham/create', component:AddProductComponent},
  {path:'admin/san-pham/edit/:id', component:EditProductComponent},
  {path:'tin-tuc/:id',component:BlogdetailComponent},
  {path:'admin/gioi-thieu/index' , component:IndexAboutComponent},
  {path:'admin/gioi-thieu/create', component:CreateAboutComponent},
  {path:'admin/tin-tuc/index', component:IndexblogComponent},
  {path:'admin/tin-tuc/create', component:AddBlogComponent},
  {path:'admin/tin-tuc/edit', component:EditBlogComponent},
  {path:'admin/danh-muc/index', component:IndexCategoryComponent},
  {path:'admin/danh-muc/create', component:AddCategoryComponent},
  {path:'admin/danh-muc/edit', component:EditCategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
