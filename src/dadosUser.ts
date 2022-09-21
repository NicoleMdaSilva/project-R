import { User } from "./User"
import PromptSync from "prompt-sync";

const prompt = PromptSync();

const users: User[] = []

let userName = ''
let password = ''

//Login
export function handleLogin(){
    do{
        console.clear();
        console.log('Digite seu UserName: ');
        userName = prompt('--> ');
        console.log('Digite sua senha: ');
        password = prompt('--> ');
    }while(userName.length < 2 && password.length < 2);
    
    users.forEach(user => {
        if(user.userName == userName && user.password == password){
            console.clear();
            console.log('Login realizado com sucesso');
            
        }else{
            console.clear();
            console.log('Usuário não encontrado\n');
        }
        
    });
}


//Cadastro
console.clear();

do {
    console.log('Qual é o seu nome? (Precisa ter mais de 2 caracteres)')
    userName = prompt('--> ');
    console.log('Qual é a sua senha? (Precisa ter mais de 2 caracteres)')
    password = prompt('--> ');

} while (userName.length < 2 && password.length < 2);

const newUser = new User(userName, password);

users.push(newUser);

console.clear();
console.log("Usuário Criado com Sucesso!\n");




