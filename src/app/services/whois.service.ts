import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {WhoisInfo} from "../models/whois-info";

@Injectable({
  providedIn: 'root'
})
export class WhoisService {

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': environment.whoisApi.key,
      'X-RapidAPI-Host': environment.whoisApi.host
    }),
  };

  supportedTldList = ["com", "net", "org", "me", "au", "ru", "us", "uk", "fr", "nl", "fi", "jp", "pl", "br", "eu", "ee", "kr", "bg", "de", "at", "ca", "be", "рф", "info", "su", "kg", "biz", "mobi", "id", "sk", "se", "nu", "is", "io", "asia", "bike", "co"]

  tldIsSupported(tld: string): boolean {
    return this.supportedTldList.includes(tld)
  }

  getWhoisInfo(domain: string) {
    return this.http
      .get<{domain: WhoisInfo}>(`${environment.whoisApi.url}/domains/${domain}`,
        {headers: this.httpOptions.headers}
      )
  }
}
