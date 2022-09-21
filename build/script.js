"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const User_1 = require("./User");
const prompt = (0, prompt_sync_1.default)();
let option = 1;
let userName = '';
let userNameLenght = 0;
let passwordLenght = 0;
let password = '';
const Users = [];
while (option != 0) {
    do {
        console.clear();
        console.log('1 - login');
        console.log('2 - Cadastrar uma nova conta');
        console.log('0 - Sair do programa');
        option = Number(prompt('--> '));
    } while (option != 1 && option != 2 && option != 0);
    switch (option) {
        case 1:
            break;
        case 2:
            console.clear();
            do {
                console.log('Qual é o seu nome? (Precisa ter mais de 2 caracteres)');
                userName = prompt('--> ');
                userNameLenght = userName.length;
            } while (userNameLenght < 2);
            do {
                console.log('Qual é a sua senha? (Precisa ter mais de 2 caracteres)');
                password = prompt('--> ');
                passwordLenght = password.length;
            } while (passwordLenght < 2);
            const newUser = new User_1.User(userName, password);
            Users.push(newUser);
            console.log("Usuário Criado com Sucesso!\n");
            break;
        case 0:
            break;
        default:
            break;
    }
}
