import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData:PaymentDetail=new PaymentDetail;
  readonly rootURL='https://localhost:44310/api';
  list:PaymentDetail[]=[];

  constructor(private http:HttpClient) { }

  postPaymentDetail(){
    return this.http.post(this.rootURL + '/PaymentDetails',this.formData);
  }

  putPaymentDetail(){
    debugger;
    return this.http.put(this.rootURL + '/PaymentDetails/'+this.formData.PMId,this.formData);
  }

  deletePaymentDetail(id){
    debugger;
    return this.http.delete(this.rootURL + '/PaymentDetails/'+id);
  }
  
  refreshList(){
    this.http.get(this.rootURL + '/PaymentDetails').toPromise().then(res => this.list = res as PaymentDetail[]);
  }
}
