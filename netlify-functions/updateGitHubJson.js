const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    const { body } = event;

    // Detalhes do GitHub
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Pega o token da variável de ambiente
    const REPO_OWNER = 'seu_nome_de_usuario'; // Seu nome de usuário no GitHub
    const REPO_NAME = 'nome_do_seu_repositorio'; // Nome do seu repositório no GitHub
    const FILE_PATH = 'path/para/o/arquivo/data.json'; // Caminho para o arquivo JSON no seu repositório
    const COMMIT_MESSAGE = 'Atualização do arquivo JSON';

    const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;

    const headers = {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
    };

    // Obter o conteúdo atual do arquivo JSON
    const response = await fetch(url, { method: 'GET', headers });
    const data = await response.json();

    // Codificar o novo conteúdo JSON
    const encodedContent = Buffer.from(body).toString('base64');

    // Dados para enviar à API do GitHub para atualizar o arquivo
    const updateData = {
        message: COMMIT_MESSAGE,
        content: encodedContent,
        sha: data.sha // SHA hash do arquivo para atualizá-lo
    };

    // Enviar a atualização para o GitHub
    const updateResponse = await fetch(url, {
        method: 'PUT',
        headers,
        body: JSON.stringify(updateData),
    });

    const updateResult = await updateResponse.json();

    // Verificar se o commit foi bem-sucedido
    if (updateResult.commit) {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Arquivo JSON atualizado com sucesso!' }),
        };
    } else {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Falha ao atualizar o arquivo JSON' }),
        };
    }
};
