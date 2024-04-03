import './FormAnimal.css';
import React, { useState } from 'react';


function FormAnimal() {
    const urlServer = 'http://localhost:5173/cadastro&#39';

    // Defina o estado para armazenar os valores dos campos de entrada
    const [formData, setFormData] = useState({
        nomeAnimal: '',
        generoAnimal: '',
        idadeAnimal: ''
    });

    // Função para lidar com a mudança nos campos de entrada
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o recarregamento da página
        // Envia os dados do formulário para o servidor
        //console.log(JSON.stringify(formData));
        fetch(urlServer, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao enviar formulário');
                }
                // Trate a resposta do servidor conforme necessário
                console.log('Formulário enviado com sucesso');
            })
            .catch(error => {
                console.error('Erro:', error);
            });
    };

    return (
        <>
            <h1>Cadastro de Ave</h1>
            <form onSubmit={handleSubmit} className="container">
                <label>
                    <input
                        placeholder='Nome Animal'
                        type="text"
                        name="nomeAnimal"
                        value={formData.nomeAnimal}
                        onChange={handleChange}
                        className="campos"
                    />
                </label>
                <label>
                    <input
                        placeholder='Idade Animal'
                        type="number"
                        alt='Idade Animal'
                        name="idadeAnimal"
                        value={formData.idadeAnimal}
                        onChange={handleChange}
                        className="campos"
                    />
                </label>
                <label>
                    <select
                        name="generoAnimal"
                        value={formData.generoAnimal}
                        onChange={handleChange}
                        className="selecao"
                    >
                        <option value="macho">Macho</option>
                        <option value="femea">Fêmea</option>
                        <option value="desconhecido">Desconhecido</option>
                    </select>
                </label>
                <button type="submit" className='botao'>Enviar</button>
            </form>
        </>
    );
}

export default FormAnimal;