import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    //Configuramos el proyecto de tal manera que nos permita traer los datos mediante un fetch de la URL de la API
    provideHttpClient(withFetch()),
  ],
};
