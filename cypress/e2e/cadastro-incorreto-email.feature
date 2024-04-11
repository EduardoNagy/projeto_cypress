#utf-8
#language: pt

Funcionalidade: cadastroIncorretoEmail
    Cenário: Validações Cadastro Incorreto Email
        Dado que acesso o portal My Shop
        Quando acesso login para criar nova conta
        E o campo e-mail não é preenchido
        E clico no botão para criar uma conta
        Então é exibida mensagem de preenchimento obrigatório do e-mail