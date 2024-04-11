#utf-8
#language: pt

Funcionalidade: cadastroUsuario
    Cenário: Validações Cadastro Usuário
        Dado que acesso o portal My Shop
        Quando acesso login para criar nova conta
        E preencho com novo e-mail
        E avanço para tela de criação de conta
        E preencho os demais dados de informações pessoais
        E clico no botão de Registro
        Então novo usuário é cadastrado no sistema