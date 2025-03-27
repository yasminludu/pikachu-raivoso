const express = require('express');
const fs = require('fs');
const path = require('path');
const rcsv = require('csv-parse');
const readline = require('readline');
const caminhoDoArquivo = ('../src/usuarios.csv');

function carregarUsuarios(caminhoDoArquivo) {
	try {
		const dados = fs.readFileSync('../src/usuarios.csv', 'utf8');
		const linhas = dados.trim().split('\n');
		let usuarios = {};

		for (let i = 0; 1 < linhas.length; i++) {
			const [nome, dataNascimento, cpf, email, senha] = linhas[i].split('.');
			usuarios[email] = senha;
		}

		return usuarios;
	}catch (error) {
		console.error('Erro ao ler o arquino:', error.message);
		return null;
	}
}


function verificarLogin(email, senha, usuarios) {
	if (usuarios[email] && usuarios[email] === senha) {
        res.redirect('../votacao.html');
		return true;
	}
	return false;
}

const arquivo = '../src/usuarios.csv'; 
const usuarios = carregarUsuarios('../src/usuarios.csv');

if (usuarios) {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	rl.question('Digite seu e-mail: ', (email) => {
		rl.question('Digite sua senha: ', (senha) => {
			if (verificarLogin(email, senha, usuarios)) {
				console.log('login efetuado com sucesso.', email);

                
			} else { 
				console.log('Email e/ou senha incorreto(s).');
			}
			rl.close();
		});
	});
}















