# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

- # E-Commerce Project

## Descrição

Este projeto é um e-commerce desenvolvido com React, TypeScript e Vite. A aplicação permite aos usuários visualizar produtos, adicionar itens ao carrinho e realizar a navegação através das diferentes páginas do site. O projeto utiliza Tailwind CSS para estilização e Firebase para funcionalidades adicionais, como autenticação e banco de dados (se aplicável).

## Tecnologias

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **Vite**: Ferramenta de build rápida para desenvolvimento frontend.
- **Tailwind CSS**: Framework de CSS utilitário para estilização rápida.
- **Firebase** (opcional): Serviço para autenticação e armazenamento (caso seja utilizado).

## Instalação

Para começar a desenvolver ou rodar o projeto localmente, siga estes passos:

### 1. Clonar o Repositório

Clone o repositório para a sua máquina local:


git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
npm run dev

