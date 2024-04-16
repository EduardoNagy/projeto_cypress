#utf-8
#language: pt

@cadastro_usuario
Funcionalidade: cadastroUsuario

    @sucesso_cadastro
    Cenario: Validações Cadastro Usuário
        Dado que acesso o portal My Shop
        Quando acesso login para criar nova conta
        E preencho com novo e-mail
        E avanço para tela de criação de conta
        E preencho os demais dados de informações pessoais
        E clico no botão de Registro
        Então novo usuário é cadastrado no sistema

    @falha_email
    Cenario: Validações Cadastro Incorreto Email
        Dado que acesso o portal My Shop
        Quando acesso login para criar nova conta
        E o campo e-mail não é preenchido
        E clico no botão para criar uma conta
        Então é exibida mensagem de preenchimento obrigatório do e-mail

    @falha_infs_pessoais
    Cenario: Validações Cadastro Incorreto Infs Pessoais
        Dado que acesso o portal My Shop
        Quando acesso login para criar nova conta
        E preencho com novo e-mail
        E avanço para tela de criação de conta
        E não preencho todos os campos obrigatórios de informações pessoais
        E clico no botão de Registro
        Então é exibida mensagem de preenchimento obrigatório dos campos