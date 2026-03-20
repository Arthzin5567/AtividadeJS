// Criando o vetor
let cadastro = [];

// Coletando variáveis
const vendedor = document.getElementById('vendedor');
const venda = document.getElementById('venda');

function adicionarObjeto() {
    // Pegar o valor numérico do input
    const valorNumerico = parseFloat(venda.value);

    // Calcular o desconto usando sua função
    const valorDesconto = calcularDesconto(valorNumerico);
    const valorFinal = valorNumerico - valorDesconto;

    const item = {
        id: 0,
        vendedor: vendedor.value,
        venda: valorNumerico,
        desconto: valorDesconto,
        total: valorFinal
    };

    cadastro.push(item);

    console.log("Cadastrado com sucesso!", cadastro);

    atualizarTabela(); 
    
    // Limpa os campos para o próximo cadastro
    vendedor.value = '';
    venda.value = '';
    vendedor.focus();
}

function calcularDesconto(venda) {
    return venda * 0.25;
}

function aplicarDesconto() {
    return valorFinal = venda - desconto;
}

function atualizarTabela() {
    const corpo = document.getElementById('corpoTabela');
    const infoDiv = document.getElementById('info');

    corpo.innerHTML = '';

    if (cadastro.length === 0) {
        // Se estiver vazio, injeta uma linha ocupando todas as colunas
        corpo.innerHTML = '<tr><td colspan="5" style="text-align:center">Nenhum registro encontrado</td></tr>';
        infoDiv.innerHTML = "Total de registros: 0";
        return;
    }

    for (let i = 0; i < cadastro.length; i++) {
        const linha = document.createElement('tr');

        linha.innerHTML = `
            <td>${i + 1}</td>
            <td>${cadastro[i].vendedor}</td>
            <td>R$ ${cadastro[i].venda.toFixed(2)}</td>
            <td>R$ ${cadastro[i].desconto.toFixed(2)}</td>
            <td>R$ ${cadastro[i].total.toFixed(2)}</td>
        `;

        corpo.appendChild(linha);
    }

    infoDiv.innerHTML = `Total de registros: ${cadastro.length}`;
}

function removerObjeto() {
    // 1. Verificar se o vetor tem algo (evita erro em vetor vazio)
    if (cadastro.length === 0) {
        alert("A tabela já está vazia!");
        return;
    }

    // 2. O .pop() remove o último elemento do vetor e o retorna
    const removido = cadastro.pop();

    // 3. Importante: Como o dado saiu do vetor, a tabela precisa "redesenhar"
    atualizarTabela();

    alert(`Venda de ${removido.vendedor} removida com sucesso!`);
}

function limparLista() {
    if (cadastro.length === 0) {
        alert("Não há dados para limpar.");
        return;
    }

    // Confirmar com o usuário (boa prática de UX)
    if (confirm("Tem certeza que deseja apagar todos os registros?")) {
        // Esvazia o vetor
        cadastro = [];

        // Atualiza a visualização (que agora ficará vazia)
        atualizarTabela();
    }
}

atualizarTabela();
