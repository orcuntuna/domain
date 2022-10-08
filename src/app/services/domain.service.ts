import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Domain} from "../models/domain";
import {DomainStatus} from "../models/domain-status";

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': environment.domainApi.key,
      'X-RapidAPI-Host': environment.domainApi.host
    }),
  };

  getDomains(query: string) {
    return this.http
      .get<{results: Domain[]}>(`${environment.domainApi.url}/v2/search`,
        {params: {query, location: "tr"}, headers: this.httpOptions.headers}
      )
  }

  getDomainStatus(domain: string) {
    return this.http
      .get<{status: DomainStatus[]}>(`${environment.domainApi.url}/v2/status`,
        {params: {domain}, headers: this.httpOptions.headers}
      )
  }
}
