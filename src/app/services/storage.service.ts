import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { URL_STORAGE } from '../config/env.config';
import { Recordatorio } from '../interface/recordatorio.interface';

const { Storage } = Plugins;


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  url = URL_STORAGE;
  constructor() { }
  async guardar(data: Recordatorio) {
    const recordatorios = await this.obtener();
    await Storage.set({
      key: this.url,
      value: JSON.stringify([
        ...recordatorios,
        data
      ])
    });
  }
  async borrarPorId(id: string) {
    const recordatorio = await this.obtener();
    const data = recordatorio.filter( value => value.id !== id);
    console.log(data);
    await Storage.set({
      key: this.url,
      value: JSON.stringify([
        ...data,
      ])
    });
  }
  async cambiarEstado(id: string, estado: boolean) {
    const recordatorios = await this.obtener();
    const recordatorioUpdate = recordatorios.filter(value => value.id === id)[0];
    const data = recordatorios.filter( value => value.id !== id);
    await Storage.set({
      key: this.url,
      value: JSON.stringify([ {...recordatorioUpdate, estado}, ...data])
    });
  }
  async obtener(): Promise<any[]> {
    const ret = await Storage.get({ key: this.url });
    const body = JSON.parse(ret.value);
    if (typeof body === 'undefined' || body === null) {
       return [];
    }
    return body;
  }
}
