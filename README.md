# Consulta de CEP

Uma aplicação web simples para consulta de endereços brasileiros a partir do CEP (Código de Endereçamento Postal), utilizando a API ViaCEP.

## Descrição

Este projeto permite aos usuários consultar informações de endereços brasileiros inserindo um CEP no formato válido. A aplicação se conecta à API ViaCEP para obter os dados do endereço correspondente e exibe as informações de rua, bairro, cidade e estado para o usuário.

## Funcionalidades

- Campo de entrada com máscara automática para CEP (formato 00000-000)
- Validação básica do formato do CEP antes da consulta
- Exibição de indicador de carregamento durante a consulta
- Exibição de mensagens de sucesso ou erro
- Interface responsiva e amigável

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- API ViaCEP (https://viacep.com.br/)

## Estrutura do Projeto

```
consulta-cep/
├── index.html      # Estrutura HTML da aplicação
├── styles.css      # Estilos e formatação visual
├── script.js       # Lógica de funcionamento e interação com a API
└── README.md       # Documentação do projeto
```

## Como Utilizar

1. Clone este repositório ou faça o download dos arquivos
2. Certifique-se de que todos os arquivos estejam na mesma pasta
3. Abra o arquivo `index.html` em qualquer navegador moderno
4. Digite um CEP válido no campo de entrada
5. Clique no botão "Buscar Endereço" ou pressione Enter
6. Os dados do endereço serão exibidos abaixo do formulário

## Requisitos

- Navegador web moderno com suporte a JavaScript ES6+
- Conexão com a internet para acessar a API ViaCEP

## Instalação

Não requer instalação. Basta abrir o arquivo `index.html` em um navegador web.

## Personalização

Você pode personalizar facilmente esta aplicação:

- Altere as cores modificando as variáveis de cor no arquivo CSS
- Adicione mais campos para exibir informações extras retornadas pela API
- Implemente validações adicionais para melhorar a experiência do usuário

## API Utilizada

Este projeto utiliza a API gratuita ViaCEP (https://viacep.com.br/), que permite a consulta de CEPs brasileiros e retorna informações detalhadas sobre o endereço correspondente.

Formato da URL de consulta:
```
https://viacep.com.br/ws/[CEP]/json/
```

## Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir conforme necessário.

## Autor

[Seu Nome] - [Seu Email/Website]
