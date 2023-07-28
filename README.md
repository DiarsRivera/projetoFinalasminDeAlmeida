PROJETO FINAL REPROGRAMA

ALUNA: Iasmin de Almeida :3
Turma: Back-End

NOME DO PROJETO: PROCURANDO GIRASSÓIS


DESCRIÇÃO: Pessoas autistas muito frequentemente sofrem intensas dificuldades em achar locais que ofereçam diagnóstico de TEA. Essa é uma situação que causa em nós intenso sofrimento, sem um diagnóstico, não conseguimos acessar direitos básicos indispensáveis para nosso conforto e nossa vida em sociedade. Visto isso faço como projeto final o "Procurando Girassóis", uma ferramenta que permite que o usuário cadastre estabelecimentos públicos ou privados que façam o diagnóstico de TEA, assim como permite que os usuários acessem uma lista completa dos estabelecimentos.

FUNCIONALIDADES:


get("/pegar") = Fornece ao usuário todos os estabelecimentos do banco de dados.

get("/pegar/:id") = Fornece um estabelecimento específico a partir da sua id.

post("/criar") = Cadastra um estabelecimento novo no serviço.

put("/update/:id") = Atualiza um dos estabelecimentos cadastrados.

delete("/:id") = Deleta um estabelecimento do sistema.


TECNOLOGIAS UTILIZADAS:

O projeto é interamente feito em JavaScript, se utilizando das bibliotecas dotenv, express, mongoose, nodemon, integrado na plataforma mongo.db, documentado na plataforma swagger, sendo deployado na plataforma Vercel. Além disso, provaremos sua funcionalidade na plataforma postman.


