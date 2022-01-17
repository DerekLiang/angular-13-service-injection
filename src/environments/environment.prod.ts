import { HeroService, HeroServiceBase } from "./service-a";
import { API_BASE_URL } from "./token-def";

export const environment = {
  production: true,
  providers: [
    HeroService,
    {
      provide: HeroServiceBase,
      useExisting: HeroService,
    },
    {
      provide: API_BASE_URL,
      useValue: 'hello world',
    }
  ]
};
