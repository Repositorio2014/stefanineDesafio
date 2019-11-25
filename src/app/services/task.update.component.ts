import { Component } from '@angular/core';
import { AppHttpService } from '../app-http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  templateUrl: './task-update.component.html',
})
export class TaskUpdateComponent{

    public account: Object = {
        bank: {}
      }
    
      public banks: Array<Object>;
    
      constructor (
        private httpService: AppHttpService,
        private route: ActivatedRoute,
        private router: Router,
      ) {}
    
      ngOnInit () {
        this.httpService.findAll();
      }
    
      /*view (id: number) {
        this.httpService.builder('accounts')
          .view(id)
          .then((res) => {
            this.account = res;
          })
      }*/
    
      /*bankList () {
        this.httpService.builder('banks')
          .list({limit: 200})
          .then((res) => {
            this.banks = res.data;
          })
      }*/
    
      /*save (id: number) {
        this.httpService.builder('accounts')
          .update(id, this.account)
          .then((res) => {
            this.router.navigate(['/accounts/' + id]);
          })
      }*/

}