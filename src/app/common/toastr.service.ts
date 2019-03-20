import {Injectable} from '@angular/core'

declare let toastr:any;

@Injectable()
export class ToastrService {

  constructor() {

  }
  success(message:String , title?:String) {
    toastr.success(message,title)
  }
  info (message:String , title?:String){
    toastr.success(message,title)
  }
  warining(message:String , title?:String) {
    toastr.success(message,title)
  }
  error(message:String , title?:String) {
    toastr.success(message,title)
  }

}
