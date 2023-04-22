# React Component Library

## Oficial NPM package

[![npm version](https://badge.fury.io/js/%40unusual-components%2Fcomponents-ui-react.svg)](https://badge.fury.io/js/%40unusual-components%2Fcomponents-ui-react)

https://www.npmjs.com/package/@unusual-components/components-ui-react

## Install

```bash
npm install @unusual-components/components-ui-react
```

## 💻 Tecnologias:

- Typescript
- ViteJS
- ReactJS
- styled-components
- Storybook

## 🔎 Validadores

- ESLint
- StyleLint
- Husky

---

<br />

## 🚧 Ambiente de teste

#### Na pasta da lib, execute:

```
$ npm link
```

#### Agora na pasta do projeto destino:

```
$ npm link [nome-da-lib]
```

##### Nesse momento, toda vez que gerarmos uma nova build, os arquivos irão para o projeto destino.

<br />

#### Para parar o ambiente de teste:

##### na pasta do projeto destino:

```
npm unlink [nome-da-lib]
```

---

## 🚀 Uso

#### No HOC do repo destino, coloque

```
import '[nome-da-lib]/dist/style.css';
```

#### Em qualquer lugar abaixo do HOC:

```
import { Button } from "[nome-da-lib]";
...
<Button>Teste</Button>
```
