import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-index-category',
  templateUrl: './index-category.component.html',
  styleUrls: ['./index-category.component.scss']
})
export class IndexCategoryComponent implements OnInit {
  categoryList: Array<any>= [];
  constructor(private category : CategoryService) { }

  ngOnInit(): void {
    this.category.getListALL().subscribe(data=>{
      this.categoryList = data;
    })
  }
  OnDelete(id:any){
       try {
      this.category.Delete(id).subscribe(data =>{
        this.category.getListALL().subscribe(data =>{
          this.categoryList = data;
          alert('Thành công');
        })












        
      })
    } catch (error) {
      alert('Thất bại')
    }
  }
}
