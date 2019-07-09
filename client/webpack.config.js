const path = require('path') // pegar o caminho absoluto

module.exports = {
    entry: './app-src/app.js', // primeiro modulo que será carregado na minha aplicação
    output: { // configuraçao do arquivo de bundle gerado no final
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist') // __dirname é uma variável do JS que pega o diretório atual
    },
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
}