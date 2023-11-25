import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchForm!: FormGroup;
  selectedProduct: any;
  result : string = '';
  constructor(private apiService: ApiService ,private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      storeCode: ['']
    });
  }

  getProductByStoreCode() {
    if (this.searchForm.invalid) {
      return;
    }

    const storeCode = this.searchForm.value.storeCode;
    this.apiService.getProductsByStoreCode(storeCode).subscribe(
      (data) => {
        if (Array.isArray(data) && data.length > 0) {
          // Assuming the first product in the array matches the store code
          this.selectedProduct = data[0];
          this.result = "";
        } else {
          this.selectedProduct = null;
          console.log('No product found for this store code.');
          this.result = "No products found";
        }
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
