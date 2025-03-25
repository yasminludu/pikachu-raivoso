const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: 'usuarios.csv',
    header: [
        {id: 'nomeCompleto', title: 'Nome Completo'},
        {id: 'dataNascimento', title: 'Data de Nascimento'},
        {id: 'cpf', title: 'CPF'},
        {id: 'cadastroUsuario', title: 'Email'},
        {id: 'cadastroSenha', title: 'Senha'}
    ],
    append: true
});

const createUser = async (user) => {
    console.log(user);
    await csvWriter.writeRecords([user]);
    return user;
}

module.exports = createUser;