document.getElementById('form-simples').addEventListener('submit', function(event) {
    event.preventDefault();


    const nome_ = document.getElementById('name').value;
    const idade_ = document.getElementById('age').value;
    const pais_ = document.getElementById('country').value;
    
    let output_ = document.getElementById('output');
    output_.innerHTML = `
    <p>Nome: ${nome_}</p>
    <p>Idade: ${idade_}</p>
    <p>País: ${pais_}</p>
    `;

    let campoTextContent = document.getElementById('campo-textContent');
    campoTextContent.textContent = 'Agora preenchido'
});