import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoremIpsumService {

  constructor(private http: HttpClient) { }

  public async getLoremIpsumParagraf() {
    const loremIpsumParam = await this.http.get(environment.API_LORIPSUM).toPromise();
    return loremIpsumParam;
  }

}
