import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonFormService {

  constructor() { }

  getTodayString(): string {
    return new Date().toISOString().split('T')[0]
  }
}
