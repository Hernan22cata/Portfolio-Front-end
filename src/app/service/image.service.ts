import { Injectable } from '@angular/core';
import { getDownloadURL, list, ref, Storage, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string) {
     const file = $event.target.files[0]; const imgRef = ref(this.storage, `imagen/` + name); uploadBytes(imgRef, file).then(async response => { this.url = await getDownloadURL(response.ref) }).catch(error => { console.log(error) }); }


}


