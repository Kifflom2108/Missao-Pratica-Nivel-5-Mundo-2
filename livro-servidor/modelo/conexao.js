const mongoose = require('mongoose');

const banco = mongoose.connection;

mongoose.connect(
  'mongodb+srv://felipem2108:123@cluster0.itdexrj.mongodb.net/',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

banco.on(
  'error',
  console.error.bind(console, 'Erro na conexão com o MongoDB:')
);
banco.once('open', () => {
  console.log('Conexão com o MongoDB estabelecida com sucesso!');
});

module.exports = banco;
