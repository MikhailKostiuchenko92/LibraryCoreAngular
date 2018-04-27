import { Author } from './author.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';

const CREATE_ACTION = 'create';
const UPDATE_ACTION = 'update';
const REMOVE_ACTION = 'destroy';

@Injectable()
export class AuthorService extends BehaviorSubject<any[]> {

    private url = "/api/author";

    constructor(private http: HttpClient) {
        super([]);
    }

    private data: any[] = [];

    public getData() {
        this.read();
        return this.data;
    }

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
        const originalDataItem = this.data.find(item => item.authorId === dataItem.authorId);

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
                .delete(`${this.url}/${data.authorId}`)
                .pipe(map(res => <any[]>res));
        }
        if (action == UPDATE_ACTION) {
            console.log(data);
            return this.http
                .put(`${this.url}/${data.authorId}`, data)
                .pipe(map(res => <any[]>res));
        }
    }

    private serializeModels(data?: any): string {
        return data ? `&models=${JSON.stringify([data])}` : '';
    }
}