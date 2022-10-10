<h1 align="center">PANC Map</h1>

Um projeto para gerenciamento de registros e localização de plantas alimentícias não convencionais (PANC's).

<p align="center">
  <img  src="./assets/images/logo.png" width="300">
</p>
<div align="center">

  <h3>Construído com:</h3>

  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

# Descrição

PANC Map é uma API que gerencia o armazenamento de informações de PANC e suas lozalizações, feito para interessados no consumo ou para entusiastas de botânica que desejam registrar as espécies.

</br>

## Features

- Cadastrar usuários
- Login de usuários (JSON Web Token)
- Obter espécies cadastradas e registros de localização destas
- Cadastrar novas espécies ou registrar localização de espécies

</br>

## API Reference

</br>

### Cadastrar usuário

```http
POST /signup
```

#### Request:

| Body              | Tipo     | Descrição                          |
| :---------------- | :------- | :--------------------------------- |
| `name`            | `string` | **Required**. Nome do usuário      |
| `email`           | `string` | **Required**. E-mail do usuário    |
| `password`        | `string` | **Required**. Senha escolhida      |
| `confirmPassword` | `string` | **Required**. Confirmação da senha |

</br>

#### Response:

```shell
"User registered successfully"
```

#

### Login de usuário

```http
POST /signin
```

#### Request:

| Body       | Tipo     | Descrição                       |
| :--------- | :------- | :------------------------------ |
| `email`    | `string` | **Required**. E-mail do usuário |
| `password` | `string` | **Required**. Senha do usuário  |

</br>

#### Response:

```json
{
  "token": "string",
  "user": {
    "id": "number",
    "name": "string",
    "superuser": "boolean"
  }
}
```

#

### Cadastrar nova espécie (somente super usuários)

```http
POST /specie
```

#### Request:

| Body                     | Tipo     | Descrição                                       |
| :----------------------- | :------- | :---------------------------------------------- |
| `cientificName`          | `string` | **Required**. Nome científico da espécie        |
| `generalCharacteristics` | `string` | **Required**. Características gerais da espécie |
| `curiosities`            | `string` | Curiosidades da espécie                         |
| `leafMorfology`          | `string` | **Required**. Morfologia da folha               |
| `flowerMorfology`        | `string` | **Required**. Morfologia da flor                |
| `fruitMorfology`         | `string` | Morfologia do fruto                             |
| `undergroundMorfology`   | `string` | Morfologia do órgão subterrâneo                 |
| `edibleParts`            | `string` | **Required**. Partes comestíveis da planta      |
| `leafPicturePath`        | `string` | **Required**. Imagem da folha                   |
| `flowerPicturePath`      | `string` | **Required**. Imagem da flor                    |
| `fruitPicturePath`       | `string` | Imagem do fruto                                 |
| `undergroundPicturePath` | `string` | Imagem do órgão subterrâneo                     |

`Imagens em formato de URL.`

####

| Headers         | Tipo     | Descrição                  |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

####

</br>

#### Response:

```shell
"Specie registered successfully"
```

#

### Obter uma espécie

```http
GET /specie/${specieId}
```

#### Request:

| Params     | Tipo      | Descrição                   |
| :--------- | :-------- | :-------------------------- |
| `specieId` | `integer` | **Required**. Id da espécie |

</br>

#### Response:

```json
{
    "id": "number",
    "cientificName": "string",
    "generalCharacteristics": "string",
    "curiosities": "string" null,
    "leafMorfology": "string",
    "flowerMorfology": "string",
    "fruitMorfology": "string" null,
    "undergroundMorfology": "string" null,
    "leafPicturePath": "string",
    "flowerPicturePath": "string",
    "fruitPicturePath": "string" null,
    "undergroundPicturePath": "string" null,
    "edibleParts": "string",
    "createdAt": "Date",
}
```

#

### Obter todas as espécies

```http
GET /species
```

</br>

#### Response:

```json
[
  {
    "id": "number",
    "cientificName": "string"
  }
]
```

#

### Editar uma espécie (somente super usuários)

```http
PUT /specie/${specieId}
```

#### Request:

| Params     | Tipo      | Descrição                   |
| :--------- | :-------- | :-------------------------- |
| `specieId` | `integer` | **Required**. Id da espécie |

###

| Body                     | Tipo     | Descrição                                       |
| :----------------------- | :------- | :---------------------------------------------- |
| `cientificName`          | `string` | **Required**. Nome científico da espécie        |
| `generalCharacteristics` | `string` | **Required**. Características gerais da espécie |
| `curiosities`            | `string` | Curiosidades da espécie                         |
| `leafMorfology`          | `string` | **Required**. Morfologia da folha               |
| `flowerMorfology`        | `string` | **Required**. Morfologia da flor                |
| `fruitMorfology`         | `string` | Morfologia do fruto                             |
| `undergroundMorfology`   | `string` | Morfologia do órgão subterrâneo                 |
| `edibleParts`            | `string` | **Required**. Partes comestíveis da planta      |
| `leafPicturePath`        | `string` | **Required**. Imagem da folha                   |
| `flowerPicturePath`      | `string` | **Required**. Imagem da flor                    |
| `fruitPicturePath`       | `string` | Imagem do fruto                                 |
| `undergroundPicturePath` | `string` | Imagem do órgão subterrâneo                     |

`Imagens em formato de URL.`

###

| Headers         | Tipo     | Descrição                  |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

###

</br>

#### Response:

```shell
  "Specie successfully updated"
```

#

### Deletar o registro de uma espécie (somente super usuários)

```http
DELETE /specie/${specieId}
```

#### Request:

| Params     | Tipo      | Descrição                   |
| :--------- | :-------- | :-------------------------- |
| `specieId` | `integer` | **Required**. Id da espécie |

###

| Headers         | Tipo     | Descrição                  |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

###

</br>

#### Response:

```shell
"Specie deleted successfully"
```

#

### Criar um registro

```http
POST /register
```

#### Request:

| Body           | Tipo      | Descrição                        |
| :------------- | :-------- | :------------------------------- |
| `title`        | `string`  | **Required**. Breve descrição    |
| `longitude`    | `string`  | **Required**. Longitude do local |
| `latitude`     | `string`  | **Required**. Latitude do local  |
| `specieId`     | `integer` | **Required**. Id da espécie      |
| `observations` | `string`  | Observações do local/registro    |

`Latitude e longitude em UTM.`

###

| Headers         | Tipo     | Descrição                  |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

###

</br>

#### Response:

```shell
"Register registered successfully"
```

#

### Obter registros do usuário

```http
GET /myregisters/${userId}
```

#### Request:

| Params   | Tipo      | Descrição                   |
| :------- | :-------- | :-------------------------- |
| `userId` | `integer` | **Required**. Id do usuário |

###

</br>

#### Response:

```json
[
  {
    "id": "number",
    "title": "string",
    "longitude": "string",
    "latitude": "string",
    "observations": "string",
    "specie": {
      "cientificName": "string"
    }
  }
]
```

#

### Obter registros de uma espécie

```http
GET /resgisters/${specieId}
```

#### Request:

| Params     | Tipo      | Descrição                   |
| :--------- | :-------- | :-------------------------- |
| `specieId` | `integer` | **Required**. Id da espécie |

###

</br>

#### Response:

```json
[
  {
    "id": "number",
    "title": "string",
    "longitude": "string",
    "latitude": "string",
    "userId": "number",
    "specieId": "number",
    "observations": "string" null,
    "createdAt": "Date",
  },
]
```

#

### Obter um registro

```http
GET /resgister/${registerId}
```

#### Request:

| Params       | Tipo      | Descrição                    |
| :----------- | :-------- | :--------------------------- |
| `registerId` | `integer` | **Required**. Id do registro |

###

</br>

#### Response:

```json
{
  "title": "string",
  "longitude": "string",
  "latitude": "string",
  "observations": "string",
  "specie": {
    "id": "number",
    "cientificName": "string"
  }
}
```

#

### Editar um registro

```http
PUT /register/${registerId}
```

#### Request:

| Params       | Tipo      | Descrição                    |
| :----------- | :-------- | :--------------------------- |
| `registerId` | `integer` | **Required**. Id do registro |

###

| Body           | Tipo      | Descrição                        |
| :------------- | :-------- | :------------------------------- |
| `title`        | `string`  | **Required**. Breve descrição    |
| `longitude`    | `string`  | **Required**. Longitude do local |
| `latitude`     | `string`  | **Required**. Latitude do local  |
| `specieId`     | `integer` | **Required**. Id da espécie      |
| `observations` | `string`  | Observações do local/registro    |

`Latitude e longitude em UTM.`

###

| Headers         | Tipo     | Descrição                  |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

###

</br>

#### Response:

```shell
"Register successfully updated"
```

#

### Deletar um registro

```http
DELETE /register/${registerId}
```

#### Request:

| Params       | Tipo      | Descrição                    |
| :----------- | :-------- | :--------------------------- |
| `registerId` | `integer` | **Required**. Id do registro |

###

| Headers         | Tipo     | Descrição                  |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

###

</br>

#### Response:

```shell
"Register deleted successfully"
```

#

## Variáveis de ambiente

Para o funcionamento desta API é necessário adicionar as seguintes variáveis de ambiente no arquivo .env:

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`PORT = "number" #recomendado:5000`

`JWT_SECRET = qualquer chave para gerar o token`

</br>

## Agradecimentos

- Driven Education, em especial ao instrutor Frank Rocha e ao tutor Yohan Lopes.

</br>

## Autor

- Gadiel Azevedo.
  <br/>

#
