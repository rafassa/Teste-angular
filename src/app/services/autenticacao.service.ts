import {  Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../interfaces/Usuario.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class AutenticacaoService {


  
constructor(private http:HttpClient){
const loginEstado = localStorage.getItem("autoLogin")
this.autoLogin = loginEstado === 'true'
}
loginInputInfo:string []=[]
private autoLogin = false

getApiInformation(apiInfo:Usuario[]){
console.log(apiInfo)
localStorage.setItem('apiUsuarios', JSON.stringify(apiInfo))
}

removeStorage(){
localStorage.removeItem('apiUsuarios')
localStorage.removeItem('valor')
}

postAPI(user:Usuario[]):Observable<Usuario[]>{
  const apiUrl="http://localhost:3001/login"
  return this.http.post<Usuario[]>(apiUrl, user)
}


pegarValorCheck(valor:any){
localStorage.setItem('valor', JSON.stringify(valor))

}



}

