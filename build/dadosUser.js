"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleLogin = void 0;
const User_1 = require("./User");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const users = [];
let userName = '';
let password = '';
//Login
function handleLogin() {
    do {
        console.clear();
        console.log('Digite seu UserName: ');
        userName = prompt('--> ');
        console.log('Digite sua senha: ');
        password = prompt('--> ');
    } while (userName.length < 2 && password.length < 2);
    users.forEach(user => {
        if (user.userName == userName && user.password == password) {
            console.clear();
            console.log('Login realizado com sucesso');
        }
        else {
            console.clear();
            console.log('Usuário não encontrado\n');
        }
    });
}
exports.handleLogin = handleLogin;
//Cadastro
console.clear();
do {
    console.log('Qual é o seu nome? (Precisa ter mais de 2 caracteres)');
    userName = prompt('--> ');
    console.log('Qual é a sua senha? (Precisa ter mais de 2 caracteres)');
    password = prompt('--> ');
} while (userName.length < 2 && password.length < 2);
const newUser = new User_1.User(userName, password);
users.push(newUser);
console.clear();
console.log("Usuário Criado com Sucesso!\n");
