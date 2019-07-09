# Meu caderno de estudos

# Webpack: Manipulando módulos na sua webapp

Na pasta client, instalei o projeto, executando:
```
npm i
```
```
npm run watch
```

Na pasta server, subi o servidor, executando:
```
npm start
```

No navegador, acessei a aplicação pela url:
```
localhost:3000
```

Apaguei a pasta App, porque a geração dos arquivos compilados pelo Babel será feita com o auxílio do Webpack mais adiante

```
npm uninstall systemjs --save
```
```
npm uninstall babel-cli --save-dev
```

No index.html, adicionei a importação para o futuro funcionamento do webpack
```
<script src="dist/bundle.js"></script>
```

Instalei o webpack e o babel-core
```
npm install webpack babel-core --save-dev
```

Criei o arquivo webpack.config.js com a configuração mínima de entrada e saída
```
const path = require('path') // pegar o caminho absoluto

module.exports = {
    entry: './app-src/app.js', // primeiro modulo que será carregado na minha aplicação
    output: { // configuração do arquivo de bundle gerado no final
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') // __dirname é uma variável do JS que pega o diretório atual
    }
}
```

No package.json, criei o script para executar o build em desenvolvimento
```
"build-dev": "webpack --config webpack.config.js"
```

Instalei o babel-loader
```
npm install babel-loader --save-dev
```

No webpack.config, configurei o babel-loader
```
module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        }
    ]
}
```

Desinstalei a dependência babel-plugin-transform-es2015-modules-systemjs do package.json e no .babelrc removi o plugin transform-es2015-modules-systemjs
```
"transform-es2015-modules-systemjs"
```
```
npm uninstall babel-plugin-transform-es2015-modules-systemjs --save-dev
```

Definições:

- O webpack é um automatizador de tarefas. 

- O babel-core nada mais é do que o núcleo do babel desprovido de sua linha de comando e que pode ser utilizado por outras ferramentas do mercado como Webpack.

- Webpack dispensa a utilização de um module loader, justamente por criar em bundles em tempo de desenvolvimento, que nada mais são do que scripts que agregam outros módulos da aplicação.

- É comum utilizar um npm script para executar o webpack bastando adicioná-lo no arquivo package.json.

- O arquivo de configuração do webpack nada mais é do que um módulo do Node.js.



Deu alguns erros, o curso está trabalhando com versões desatualizadas. Seguindo instalações pelo [github do babel-loader](https://github.com/babel/babel-loader) e [artigo no medium](https://medium.com/rocketseat/entendendo-e-dominando-o-webpack-4b2e8b3e02da)
```
npm install -D babel-loader @babel/core @babel/preset-env webpack
```
