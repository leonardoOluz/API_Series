# API_Series REST

API_Series usando o conceito REST com protocolo HTTP e seus Metodos. Fazendo o CRUD usando o Postman

## 🚀 Começando
A API  segue os padrões REST e o protocolo HTTP e seus métodos (GET, POST, PUT, DELETE) que são os métodos mais utilizado em uma API REST.


### 📋 Pré-requisitos

Para que possa rodar a API_Series, será necessario um editor de codigo podendo ser o VScode junto com o Node.JS v18.12.1 e NPM v8.19.2.

Criar uma conta no MongoDB Atlas para que possa utilizar o banco de dados em seu projeto.

* [InstalaçãoVScode](https://www.youtube.com/watch?v=_R6YslWRUFk) -Link de exemplo para instalção do VScode.   (creditos para o canal da Stack Modbile)
* [InstalaçãoNodeJS](https://www.youtube.com/watch?v=HV3gGblB2G4) - Link de exemplo para instalação do NodeJs/NPM. (Creditos para o canal Universo Digital Br)
* [Criando conta no MongoDB](https://www.youtube.com/watch?v=surBmUDlTbA) - Link de exemplo para criar a conta no MongoDB ATLAS (Creditos para o canal Junior Ribeiro)

### 🔧 Instalação

Segue os passos para baixar e executar a API_Series:

```
1° baixar o projeto direto no Code e fazer o Download ou um Fork de preferência 

2° Após baixar e abrir o VScode, será necessario configurar o arquivo dbConnect.js colocando seu login e senha do MongoDB conforme o descrição do arquivo.

3° Será necessário as instalações dos frameworks conforme demostrado a baixo no ( ## Contruído com ).

4° Usar o npm run dev para que o servidor comece a rodar.

5° Após esses passos, podemos abrir o postman  e começar os teste de endpoints, passando o local da porta http://localhost:3000 , depois podemos acessar os endpoints conforme os arquivos de rotas 

6° Criando o CRUD, fazendo todos os testes no postaman.

```
* [Code ou Fork do projeto](https://github.com/leonardoluz1020/API_Series)

## 🛠️ Construído com

Depois de baixado o projeto, você devera instalar os pacotes de dependencias 

* [Express](https://expressjs.com/) - Documentação do express para instalar com o node.js versão ^4.18.2
* [Mongoose](https://mongoosejs.com/docs/index.html) -  Documentação do mongoose para instalação com o node.js versão ^6.8.1
* [Nodemon](https://www.npmjs.com/package/nodemon?activeTab=versions) - Documentação do nodemon versão ^2.0.20
* [Dotenv](https://www.npmjs.com/package/dotenv) -Documentação do dotenv obs: o uso do dotenv para que possa ocultar seu login e senha do mongodb no arquivo env e utilizar o gitignore.

