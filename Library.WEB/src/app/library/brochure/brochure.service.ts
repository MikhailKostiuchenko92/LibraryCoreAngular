import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Brochure } from './brochure.model';
import 'rxjs/add/operator/map';

import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';

const CREATE_ACTION = 'create';
const UPDATE_ACTION = 'update';
const REMOVE_ACTION = 'destroy';

@Injectable()
export class BrochureService extends BehaviorSubject<any[]> {

    private url = "/api/brochure";

    constructor(private http: HttpClient) {
        super([]);
    }

    private data: any[] = [];

    public read() {
        if (this.data.length) {
            return super.next(this.data);
        }

        this.fetch()
            .pipe(
                tap(data => {
                    this.data = data;
                })
            )
            .subscribe(data => {
                super.next(data);
            });
    }

    public save(data: any, isNew?: boolean) {
        const action = isNew ? CREATE_ACTION : UPDATE_ACTION;

        this.reset();

        this.fetch(action, data)
            .subscribe(() => this.read(), () => this.read());
  }
    public remove(data: any) {
        this.reset();

        this.fetch(REMOVE_ACTION, data)
            .subscribe(() => this.read(), () => this.read());
    }

    public resetItem(dataItem: any) {
        if (!dataItem) { return; }

        // find orignal data item
        const originalDataItem = this.data.find(item => item.brochureId === dataItem.brochureId);

        // revert changes
        Object.assign(originalDataItem, dataItem);

        super.next(this.data);
    }

    private reset() {
        this.data = [];
    }

    private fetch(action: string = '', data?: any): Observable<any[]> {
        if (action == '') {
            return this.http.get(this.url)
                    .pipe(map(res => <any[]>res));
        }
        if (action == CREATE_ACTION) {
            console.log(data);
            return this.http
                .post(this.url, data)
                .pipe(map(res => <any[]>res));
        }
        if (action == REMOVE_ACTION) {
            return this.http
                .delete(`${this.url}/${data.brochureId}`)
                .pipe(map(res => <any[]>res));
        }
        if (action == UPDATE_ACTION) {
            console.log(data);
            return this.http
                .put(`${this.url}/${data.brochureId}`, data)
                .pipe(map(res => <any[]>res));
        }
    }

    private serializeModels(data?: any): string {
        return data ? `&models=${JSON.stringify([data])}` : '';
    }
}
