#utf-8
#language: pt

Funcionalidade: cadastroIncorretoInfsPessoais
    Cenário: Validações Cadastro Incorreto Infs Pessoais
        Dado que acesso o portal My Shop
        Quando acesso login para criar nova conta
        E preencho com novo e-mail
        E avanço para tela de criação de conta
        E não preencho todos os campos obrigatórios de informações pessoais
        E clico no botão de Registro
        Então é exibida mensagem de preenchimento obrigatório dos campos