import { Injectable, Inject } from "@angular/core";
import { API_BASE_URL } from "./token-def";

export class HeroServiceBase {
}

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor( @Inject(API_BASE_URL) baseUrl: string) { }
 }
