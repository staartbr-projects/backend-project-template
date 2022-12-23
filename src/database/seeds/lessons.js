exports.seed = (knex) => {
  return knex('lessons').del()
    .then(function () {
      return knex('lessons').insert([
        {
          id: "8e8a8810-e5f0-4d08-8c4a-d061bc7837eb",
          title: "Ferramentas de Gestão de Tarefas",
          description:
            "Agora você vai conhecer ferramentas de produtividade, importantes para ajudar a acompanhar suas tarefas e as do seu time, bem como o seu progresso.",
          course_id: "3b5792a0-d9e4-487c-ba13-275026be5efa",
        },
        {
          id: "04ee34b1-b147-492f-8349-78451b02c1ff",
          title: "Laços de Repetição",
          description:
            "As estruturas de controle desta aula são os laços de repetições, comandos que permitem que você faça repetições (loopings).",
          course_id: "323ae098-1624-4e24-8607-1f3a04718b11",
        },
        {
          id: "a5470ead-fcdd-4b2c-ba70-d4a0e7974d32",
          title: "Conheça a Instrutora e o Conteúdo do Curso",
          description:
            "Conheça a instrutora que escolhemos para te conduzir nas suas primeiras linhas de código e tenha spoiler do que você pode esperar desse curso.",
          course_id: "323ae098-1624-4e24-8607-1f3a04718b11",
        },
        {
          id: "1ae06eb5-5f0b-4e25-a34a-eef8aa6311d7",
          title: "Tipos de Operadores | Aritméticos e Atribuição",
          description:
            "Você vai aprender a utilizar os Operadores Aritméticos e os Operadores de Atribuição.",
          course_id: "323ae098-1624-4e24-8607-1f3a04718b11",
        },
        {
          id: "0faef8a6-cb94-4d45-9a2f-f69878b7610a",
          title: "Processos: Descobrir e Definir",
          description:
            "Um profissional de design precisa conhecer diferentes métodos e técnicas. Nesta aula, vamos discutir as ferramentas para descobrir e definir novos produtos e serviços, utilizando design. Vamos também conhecer as atividades que um designer UX pode desempenhar em seu dia a dia.",
          course_id: "d1cb69bc-ad2b-4b29-abcc-d2514b0c57ed",
        },
        {
          id: "5a2e4853-e9f9-4056-9621-c243eaef9dfa",
          title: "Tipos de programadores",
          description:
            "Você sabe a diferença entre um programador frontend, backend e full stack? Se não, não se preocupe. Nessa aula descobrirá as semelhanças e diferenças entre esses profissionais.",
          course_id: "23856860-f5b9-4b71-a92f-546902b8348c",
        },
        {
          id: "bb78bfeb-c8e2-43f8-9e47-bbd4627c4aba",
          title: "Formas de tirar dúvidas",
          description:
            "Nesta aula, Leonardo Scorza vai abordar uma das principais características de um desenvolvedor. Ela é fundamentalmente importante e sem ela os desenvolvedores, iniciantes ou não, nunca conquistarão independência.",
          course_id: "19a31b7a-1286-4927-830e-564cbcd54a23",
        },
        {
          id: "7bd22421-cbb7-4451-8af5-54bd6bff3ca6",
          title: "Conhecendo outros aplicativos do Microsoft 365",
          description:
            "Nesta aula, você vai explorar outras ferramentas da suite Microsoft 365: O Microsoft Whiteboard, que permite a colaboração entre times e o compartilhamento de telas; O Microsoft One Note, que permite a criação de cadernos para gestão de conhecimento individual e compartilhado entre as equipes; O Microsoft Forms, que permite a criação de formulários, pesquisas e campanhas; O Microsoft Streams que permite criar e carregar vídeos dentro de uma biblioteca interna da sua organização.",
          course_id: "f37347da-7fff-41c8-b66a-68fbbc28d9c5",
        },
        {
          id: "dbdf5787-aa46-42a5-8bf8-4d8c3ee75e2a",
          title: "Softskills para Front-end",
          description:
            "A toda habilidade técnica exigida para se tornar um desenvolvedor, é dado o nome de hardskills. Já as habilidades comportamentais são chamadas de softskills e, nesta aula, Leonardo Scorza abordará os principais pontos para você entender que o relacionamento interpessoal não deve, jamais, ser negligenciado.",
          course_id: "19a31b7a-1286-4927-830e-564cbcd54a23",
        },
        {
          id: "a083c5da-3071-4e50-8ec9-2d4af478b722",
          title: "Profissional do Futuro",
          description:
            "Quais as competências do profissional do futuro? Além de habilidades digitais, vamos abordar também as competências interpessoais que você precisa conhecer.",
          course_id: "3b5792a0-d9e4-487c-ba13-275026be5efa",
        },
        {
          id: "43fb016b-8532-4254-a058-16b3bc7c8ff4",
          title: "Back End e Front End",
          description:
            "O que acontece após um usuário clicar em um botão dentro de um site ? Entenda o que acontece por trás dos principais sistemas.",
          course_id: "23856860-f5b9-4b71-a92f-546902b8348c",
        },
        {
          id: "c3ea7a55-231d-4a4f-a538-3a6092f09b07",
          title: "O que é Front-end?",
          description:
            "Leonardo Scorza vai te mostrar o que é Front-end e tudo o que está por trás das telas que você visualiza nas mais diversas aplicações web, além de explicar como os profissionais responsáveis atuam.\nComo as informações de um banco de dados aparecem em seu navegador com uma interface amigável? Entenda isso e mais um pouco nesta aula!",
          course_id: "19a31b7a-1286-4927-830e-564cbcd54a23",
        },
        {
          id: "ed429c41-b4a8-493d-ad81-eef81ed52f35",
          title: "JavaScript na prática",
          description:
            "Agora que você já aprendeu o que é JavaScript, chegou a hora de colocar a mão na massa e finalmente programar. \nNesta aula, Leonardo Scorza vai dar continuidade ao projeto já iniciado em aulas anteriores, manipulando elementos HTML com JavaScript.",
          course_id: "19a31b7a-1286-4927-830e-564cbcd54a23",
        },
        {
          id: "153059c5-abe7-4433-9815-6383f5322459",
          title: "Ferramentas Low Code",
          description:
            "Existem plataformas com componentes prontos para automatizar processos e conectar programas, ou seja, elas viabilizam execução de algumas tarefas sem a necessidade de programação. Mário apresenta algumas aqui.",
          course_id: "3b5792a0-d9e4-487c-ba13-275026be5efa",
        },
        {
          id: "a242a6f4-c00b-4530-9756-1f6dd5c51fba",
          title: "Aplicativos mais complexos",
          description:
            "Você pode criar aplicativos mais complexos que os que aprendemos anteriormente usando o SharePoint e a plataforma Low Code da Microsoft. Aprenda como começar nesta aula.",
          course_id: "2ba9f95a-e17a-4ede-b754-0f73d36c3b42",
        },
        {
          id: "b5bb8976-7f71-4146-9df2-b7da4f8fbdc5",
          title: "Testando seu aplicativo em um dispositivo móvel",
          description:
            "Veja o passo a passo para acessar os aplicativos que você criou e avalie as funcionalidades com essa aula.",
          course_id: "2ba9f95a-e17a-4ede-b754-0f73d36c3b42",
        },
        {
          id: "f7fef921-1c5e-4f5e-9e35-7aed99daf628",
          title: "Dados e sua importância",
          description:
            "Explore alguns conceitos e definições essenciais para entender a importância do uso de dados e, consequentemente, a importância deste curso.",
          course_id: "12e4c01f-a7ea-4c64-a656-8a9c7d0d3e61",
        },
        {
          id: "917c9d9f-7aec-4dee-8e90-dd4c4ea66f09",
          title: "Cases e exemplos reais",
          description:
            "O varejo americano foi um pioneiro na coleta e análise de dados, mas não é apenas este segmento que tem casos de sucesso. Esta aula explora a habilidade de algumas empresas de trabalhar o grande volume de dados e transformá-los em ideias.",
          course_id: "12e4c01f-a7ea-4c64-a656-8a9c7d0d3e61",
        },
        {
          id: "586a243a-b681-4aa4-8c7a-c80a6d1ebc04",
          title: "Papéis no universo de dados",
          description:
            "Conheça boas fontes e referências para conhecer definições de termos utilizados no ambiente acadêmico e empresarial do uso de ciência de dados.",
          course_id: "12e4c01f-a7ea-4c64-a656-8a9c7d0d3e61",
        },
        {
          id: "5cb99427-12aa-48bf-9ebd-f614b5592e56",
          title: "Maiores mitos",
          description:
            "Nesta aula, Carlos apresenta as principais barreiras que as pessoas costumam achar que existem para não se aprofundarem na área, além de exemplos de profissionais que tem uma carreira não linear e hoje trabalham na área.",
          course_id: "12e4c01f-a7ea-4c64-a656-8a9c7d0d3e61",
        },
        {
          id: "480729d2-3b11-4121-9948-332c1189fd61",
          title: "HTTP e a transferência de dados",
          description:
            "O HTTP é um protocolo que permite a obtenção de recursos, como documentos HTML. Ele é a base para qualquer troca de dados na Web e um protocolo cliente-servidor. Nessa aula iremos entender como é o funcionamento e a conexão cliente-servidor através desse protocolo.",
          course_id: "468dbdd9-66bf-48ed-91fa-3dfdec5fba4e",
        },
        {
          id: "cefcfb8a-bab9-41e7-919a-389373f8669d",
          title: "Arrays",
          description:
            "Nessa aula iremos entender como funcionam os arrays, o que são vetores e matrizes e como essas estruturas podem ser usadas para resolver problemas.",
          course_id: "a69ee6be-b292-4cb9-a9a5-36481689a800",
        },
        {
          id: "7e10f0e1-94f7-462e-a2f7-77bed99b43bb",
          title: "Objetos e JSON",
          description:
            "Nessa aula iremos aprender sobre objetos e JSON, qual a diferença entre eles e porque existe essa diferença.",
          course_id: "a69ee6be-b292-4cb9-a9a5-36481689a800",
        },
        {
          id: "383c1369-fa40-4702-863c-6c97e351c67f",
          title: "Inserindo no Início e Final de Listas",
          description:
            "Agora que conhecemos um pouco mais sobre listas, chegou a hora de começarmos colocar a mão na massa fazendo algumas operações básicas para manipular itens.",
          course_id: "a69ee6be-b292-4cb9-a9a5-36481689a800",
        },
        {
          id: "5517fda9-87df-44fd-b945-a60e6dab3fd9",
          title: "Mais Métodos de Manipulação em Listas",
          description:
            "Agora que sabemos como criar operações de inserção e remoção de itens em listas, chegou a hora de entendermos como funcionam outras operações um pouco mais avançadas.",
          course_id: "a69ee6be-b292-4cb9-a9a5-36481689a800",
        },
        {
          id: "225ff29a-3788-4fce-be9f-3cb587778c49",
          title: "Pensamento Analítico vs Pensamento Crítico",
          description:
            "Você possui pensamento analítico? Nesta aula, Pollyanna Gonçalves vai explicar, através de fatos oriundos da segunda guerra mundial, o que é pensamento analítico e pensamento crítico, de modo que seja possível refletir e aprender detalhadamente do que se trata cada um deles.",
          course_id: "8aabd52a-9de6-460d-ae89-7bab57ab9b27",
        },
        {
          id: "1a7477d8-4a0f-4b50-93d2-7b79efb9e072",
          title: "Decisões Data-Driven",
          description:
            "Agora chegou a hora de iniciar a segunda parte do curso. Nesta aula, Pollyanna Gonçalves vai introduzir o que são decisões data-driven e também apresentará premissas importantes para iniciar o processo de aprendizado sobre o tema.",
          course_id: "8aabd52a-9de6-460d-ae89-7bab57ab9b27",
        },
        {
          id: "c3cedbff-bc49-4ddb-8bee-48194de59d32",
          title: "Revisão e conclusão",
          description:
            "É hora de revisar tudo o que foi abordado no curso. Nesta aula, Pollyanna Gonçalves irá repassar os principais pontos ensinados, pontos estes que são fundamentais para alavancar a sua carreira na área de dados.",
          course_id: "8aabd52a-9de6-460d-ae89-7bab57ab9b27",
        },
        {
          id: "c474d7b6-385f-4c04-ad38-11ae5ff77329",
          title: "Apresentação do Curso e Instrutor",
          description: "...",
          course_id: "310b41eb-f40c-4d0e-a0c9-311f2d67c7dc",
        },
        {
          id: "7cb92613-c568-46ed-8941-442b11ef10bf",
          title: "Visão da hipótese",
          description: "...",
          course_id: "310b41eb-f40c-4d0e-a0c9-311f2d67c7dc",
        },
        {
          id: "70237c5a-b45a-4950-8924-8285cd022b6f",
          title: "Marcação de Vídeo",
          description:
            "Nesta aula você vai aprender a colocar vídeos em sua página, utilizando duas técnicas diferentes: vídeos que estão hospedados em um serviço terceiro e vídeos que você mesmo hospedou em um servidor próprio.",
          course_id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
        },
        {
          id: "3787eeef-2c22-4bac-bd60-d20834a03040",
          title: "Fontes",
          description:
            "Entenda como colocar fontes nos textos do seu site de forma fácil e prática. Saiba como utilizar fontes personalizadas disponíveis gratuitamente na internet.",
          course_id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
        },
        {
          id: "ff667a72-23c5-449d-8b4b-4ef38f25f581",
          title: "CSS Grid",
          description:
            "Nesta aula, você vai aprender a utilizar o CSS Grid, que é uma ferramenta poderosa que permite a criação de layouts bidimensionais na web.",
          course_id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
        },
        {
          id: "ecd1805a-ee61-4851-a74c-de9f53bc98b8",
          title: "Considerações Finais e Próximos Passos",
          description:
            "Foram muitos aprendizados em tão pouco tempo! Neste vídeo você vai recapitular o aprendizado adquirido nesse curso e partir para o próximo passo da sua jornada.",
          course_id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
        },
        {
          id: "f758267e-63ca-492b-ba54-9389ccb6c217",
          title: "Apresentação do Desafio",
          description:
            "Gianotto, seu instrutor, apresenta o desafio que você tem que resolver como se fosse um gerente de produtos do Grupo Primo.",
          course_id: "fc436ab1-50d9-4523-bc11-734bd2893f32",
        },
        {
          id: "ed765c12-da9b-47d6-9bf4-51298be3b020",
          title: "Papéis Gerenciais",
          description:
            "Conheça os principais papéis e responsabilidades de cada cargo na área de tecnologia, bem como seus nomes e acrônimos.",
          course_id: "fc436ab1-50d9-4523-bc11-734bd2893f32",
        },
        {
          id: "df01e2b4-54d6-4a16-b8dd-2d1991ffdbc4",
          title: "Aplicação no Desafio",
          description:
            "Aprenda como o Grupo Primo se organiza como área, departamentos e times. Nessa aula você vai descobrir como funciona a interação entre os times para que você possa, junto com o nosso especialista, iniciar decisões que vão influenciar no produto que estão construindo juntos.",
          course_id: "fc436ab1-50d9-4523-bc11-734bd2893f32",
        },
        {
          id: "5b32704f-0bcd-47eb-bfe0-5d63a5f453d5",
          title: "Processo de Novos Projetos e Papéis de Produto",
          description:
            "Nesta aula você conhecerá as etapas do processo de definição de um projeto desde o surgimento de uma ideia ou hipótese até o início da construção de um plano.",
          course_id: "fc436ab1-50d9-4523-bc11-734bd2893f32",
        },
        {
          id: "12922c7b-3ccc-453e-899f-69cf12f7b88b",
          title: "Da Estratégia à Operação",
          description:
            "Existem diversas metodologias que podem ser utilizadas para garantir o bom andamento de um projeto. Nesta aula, vamos explorar 2 delas: Cascata (Waterfall) e Ágil (Agile).",
          course_id: "fc436ab1-50d9-4523-bc11-734bd2893f32",
        },
        {
          id: "ea913407-cd6d-4d68-8b90-bf432cd3898a",
          title: "Dia a Dia de Quem Trabalha com Programação",
          description:
            "Chegou o momento de conhecer o dia a dia de programadores, quais as suas responsabilidades no projeto, linguagens de programação a aprender e a relação com as outras áreas.",
          course_id: "fc436ab1-50d9-4523-bc11-734bd2893f32",
        },
        {
          id: "ea99a89b-295c-4b27-b7cb-38434bd4b124",
          title: "DevOps, Segurança e Infraestrutura",
          description:
            "Além de uma boa interface, requisitos bem definidos, linhas de código limpas e um bom teste, precisamos nos preocupar com as boas práticas de DevOps, Segurança e Infraestrutura. Vamos entender melhor esses papéis e como se relacionam com o desenvolvimento do produto.",
          course_id: "fc436ab1-50d9-4523-bc11-734bd2893f32",
        },
        {
          id: "74c2d98a-7ec2-4776-b70b-69771e1645d0",
          title: "Os Papéis na Área de Dados",
          description:
            "Tanto antes do lançamento de um produto, quanto após, temos muitas tarefas relacionadas a coletar, modelar e analisar dados. Vamos entender quais são os papéis chaves para a empresa.",
          course_id: "fc436ab1-50d9-4523-bc11-734bd2893f32",
        },
        {
          id: "301ab727-03a9-4924-9595-23d61081464d",
          title: "Blue Team, Red Team e Purple Team",
          description: "...",
          course_id: "0636249f-b631-4804-8767-7e721a5271b0",
        },
        {
          id: "7bb7c981-2fa6-4fb2-ae9c-3e4603548b14",
          title: "Segurança de desenvolvimento",
          description: "...",
          course_id: "0636249f-b631-4804-8767-7e721a5271b0",
        },
        {
          id: "2c8c155a-8a3d-4817-a164-58e0aca8d571",
          title: "Conclusão",
          description: "...",
          course_id: "0636249f-b631-4804-8767-7e721a5271b0",
        },
        {
          id: "724325ea-6328-4f8c-aa15-e933f571c1ec",
          title:
            "Projeto: Estruturando o Header, Formação, Habilidades e Publicações",
          description:
            "Hora de executar o projeto. Seu desafio é deixar o mais próximo ao Layout que o Designer construiu. No dia a dia de trabalho, é comum a pessoa que está desenvolvendo o Front End receba o design em alguma ferramenta especializada na construção de protótipos de alta fidelidade com as cores, espaçamentos, imagens e fontes já definidas.\nNo primeiro passo, você deve começar estruturando o header.",
          course_id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
        },
        {
          id: "ca108c13-be01-4e32-9d48-c037693b0dc6",
          title: "Projeto: Estruturando o Footer e o Formulário",
          description:
            "Nesta etapa, é hora de você estruturar o footer e o formulário do site.",
          course_id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
        },
        {
          id: "3751b3b5-2213-46ff-8f68-0073fc48cfd9",
          title: "Projeto: Aplicando CSS na seção Publicações e Footer",
          description:
            "Para finalizar o projeto, você vai aplicar seu conhecimento adquirido em CSS nas publicações e no footer de seu site.",
          course_id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
        },
        {
          id: "3bfb9474-1906-4be0-9084-e0d4c995e863",
          title: "Conheça o instrutor",
          description:
            "Leonardo Scorza, em toda a sua carreira, já passou por grandes empresas nacionais e internacionais e, recentemente, fundou a escola de programação OneBitCode. Nesse curso, Leonardo vai te ajudar configurar todo o seu ambiente de desenvolvimento do zero para que você tenha uma melhor experiência ao acompanhar os próximos conteúdos da Staart e desenvolver projetos na sua máquina.",
          course_id: "1a99deef-b707-4431-ae13-22a82c9b94eb",
        },
        {
          id: "5a34ac16-e6ba-4f24-9afb-1bc51354d7a8",
          title: "Extensões e Temas no VS Code",
          description:
            "Nessa aula iremos personalizar a experiência do VS Code instalando algumas extensões que com certeza vão melhorar bastante a forma como escrevemos e analisamos o nosso código.",
          course_id: "1a99deef-b707-4431-ae13-22a82c9b94eb",
        },
        {
          id: "07e8d89a-3890-429d-9fa1-a2ef26739aa9",
          title: "Pull Requests",
          description:
            "Que o GitHub é uma plataforma de colaboração entre equipes e pessoas individuais a gente já sabe, mas como isso funciona na prática? O que são Pull Requests? \nNessa aula iremos nos aprofundar mais nesse tema.",
          course_id: "5286cb1e-96d7-4504-a66b-430262244dc8",
        },
        {
          id: "aedc3a9b-4781-486b-aafd-061e2acc8ccb",
          title: "Instalando e configurando o Git",
          description:
            "Muita coisa aprendida até aqui, não é mesmo? \nAgora que sabemos como o GitHub funciona, chegou o momento de instalar o Git na nossa máquina para aplicarmos o conhecimento de versionamento localmente com essa ferramenta.",
          course_id: "5286cb1e-96d7-4504-a66b-430262244dc8",
        },
        {
          id: "80d25882-563d-499f-928b-b177645ce064",
          title: "Issues e projects",
          description:
            "De volta ao GitHub, agora iremos conhecer outras funcionalidades bastante importantes, principalmente se você está trabalhando em algum projeto com mais de uma pessoa. Vamos lá?",
          course_id: "5286cb1e-96d7-4504-a66b-430262244dc8",
        },
        {
          id: "1a71de84-6774-49c0-8834-7e587a92e540",
          title: "Criando um banco de dados",
          description:
            "Agora que temos o MySQL pronto para ser utilizado, vamos começar aprendendo como criar o nosso primeiro banco de dados.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "8621f2ae-e4bc-40cd-966e-06920dae2abe",
          title: "Tipos de dados",
          description:
            "Um ponto bastante importante quando tratamos de banco de dados, é o tipo de dado que devemos utilizar quando queremos salvar alguma informação. Nessa aula, conheça os tipos de dados suportados pelo MySQL e saiba quando devem ser utilizados.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "0ac99e1d-35cb-4c95-945c-bb41c24c5a6c",
          title: "Constraints - FK, default e check",
          description:
            "Agora que sabemos como funciona o relacionamento entre tabelas, vamos aplicar esse conhecimento na prática com um relacionamento 1-1 (ou 1 para 1), utilizando algumas novas constraints.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "c9022147-2bbf-4dd5-bc00-7e77e4e20acc",
          title: "SQL Join - Inner e Left",
          description:
            "Nessa aula vamos começar entender o conceito de Join no banco de dados, que basicamente é como trabalhar com conjuntos. Existem mais de um tipo de Joins disponíveis e, nessa aula, aprenderemos dois deles.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "13474c64-2ea9-4826-8aa2-8bce3716f797",
          title: "Melhor amigo do programador",
          description:
            "Como programador, a chave para descobrir as respostas é saber como pesquisar. Descubra as melhores formas e sites para solucionar para acelerar sua carreira.",
          course_id: "23856860-f5b9-4b71-a92f-546902b8348c",
        },
        {
          id: "0ab6e1c6-1af7-419a-b53c-011c77eb98b3",
          title: "Linguagem de programação",
          description:
            "Você já ouviu falar sobre Linguagem de Programação? Leonardo Scorza vai explicar tudo o que você precisa saber sobre esse tema para seguir firme na sua jornada como um desenvolvedor web. Entenda o que é, seus principais conceitos e muito mais nesta aula!",
          course_id: "19a31b7a-1286-4927-830e-564cbcd54a23",
        },
        {
          id: "58b30d65-d651-4277-9d3c-4db3067abf7a",
          title: "Conhecendo JavaScript",
          description:
            "JavaScript é uma das linguagens de programação mais queridas dos desenvolvedores, além de ser uma das mais utilizadas no mundo! \nNesta aula, Leonardo Scorza vai introduzir as principais características e curiosidades da linguagem.",
          course_id: "19a31b7a-1286-4927-830e-564cbcd54a23",
        },
        {
          id: "d926b5f7-5554-4ae7-9b45-76f296059792",
          title: "Recapitulando e revisando",
          description:
            "Chegou a hora de revisar o que foi aprendido neste curso e, \nnesta aula, Leonardo Scorza vai repassar os principais pontos vistos até aqui.\nEntender todo o conteúdo desse curso é fundamental para que a base da sua jornada para se tornar um desenvolvedor web seja construída de maneira sólida.",
          course_id: "19a31b7a-1286-4927-830e-564cbcd54a23",
        },
        {
          id: "da3c97f1-b7b8-44c3-97f6-446aa7916a7f",
          title: "Introdução ao Microsoft 365",
          description:
            "Neste curso, você vai aprender a utilizar o Microsoft 365, a principal suíte de produtividade disponível nas organizações. Você vai entender como realizar o download e instalação dos aplicativos do Microsoft Office 365 e a utilizar, de forma online e offline, os aplicativos Microsoft OneDrive, Microsoft Word, Microsoft Excel, Microsoft Power Point e Microsoft Outlook através do seu computador, navegador ou dispositivos móveis.",
          course_id: "f37347da-7fff-41c8-b66a-68fbbc28d9c5",
        },
        {
          id: "805d84d0-3964-4d1a-9ddc-e1658b3a947b",
          title: "Variáveis ou Constantes",
          description:
            "Veja quando devemos utilizar elementos variáveis ou constantes.",
          course_id: "323ae098-1624-4e24-8607-1f3a04718b11",
        },
        {
          id: "2fc8da85-f9c5-4065-975b-6aa1c630540c",
          title: "Planos de Experiência",
          description:
            "Nesta aula, vamos conhecer os planos de experiência propostos por Jesse James Garrett. Os planos estão organizados em Superfície, Esqueleto, Estrutura, Escopo e Estratégia. De maneira prática, vamos navegar por exemplos de aplicação dos planos de experiência no desenvolvimento de diferentes aplicativos.",
          course_id: "d1cb69bc-ad2b-4b29-abcc-d2514b0c57ed",
        },
        {
          id: "fa9f8159-959c-4ff5-a1e4-c4a5b4344b16",
          title: "Falando a língua do computador",
          description:
            "Por trás de todas as telas, sites e aplicativos existe um complexo sistema de instruções dizendo ao seu dispositivo o que fazer.  É aí que entram as linguagens de programação. Aprenda o que são e como essas são utilizadas para a criação de sistemas.",
          course_id: "23856860-f5b9-4b71-a92f-546902b8348c",
        },
        {
          id: "2588eed6-76d2-4da4-916e-3a73c3af933b",
          title: "Estruturas Condicionais",
          description:
            "Nesta aula você vai aprender como fazer o programa tomar decisões a partir de estruturas baseadas em condições",
          course_id: "323ae098-1624-4e24-8607-1f3a04718b11",
        },
        {
          id: "fc8699bb-8441-4b1e-9213-9c93a190eed5",
          title: "Introdução a UX Design",
          description:
            "Neste vídeo você irá conhecer seu instrutor em UX/UI Design, Daniel Furtado, será introduzido ao universo de UX com diversos exemplos práticos de aplicação de conhecimentos. Também será apresentado à origem do UX com um pouco da história por trás dessa área, bem como das várias disciplinas que a compõem a mesma",
          course_id: "d1cb69bc-ad2b-4b29-abcc-d2514b0c57ed",
        },
        {
          id: "2e11431d-5a52-48ab-a755-d12bac432638",
          title: "A tríade do Front-end",
          description:
            "Existem três elementos que sempre andam juntos quando o assunto é Front-end. \nEles são essenciais e nenhuma aplicação web pode ser construída sem considerá-los. Nesta aula, Leonardo Scorza explicará o que é html, css e JavaScript.",
          course_id: "19a31b7a-1286-4927-830e-564cbcd54a23",
        },
        {
          id: "456214b7-4839-4210-9108-c245419681b6",
          title: "Conhecendo o CSS",
          description:
            "Nesta aula, Leonardo Scorza vai abordar um dos itens mais importantes da tríade do Front-end: o CSS. Entenda o que é, sua história e os pontos mais relevantes sobre o responsável por toda a estilzação das aplicações web.",
          course_id: "19a31b7a-1286-4927-830e-564cbcd54a23",
        },
        {
          id: "e0c867de-ed10-4873-8464-6e2a7c166d9b",
          title: "Microsoft Word",
          description:
            "Aprenda a criar e editar documentos, utilizar modelos, realizar formatações, verificar gramática, utilizar o controle de versionamento e o compartilhamento do Microsoft Word.",
          course_id: "f37347da-7fff-41c8-b66a-68fbbc28d9c5",
        },
        {
          id: "2fd02d20-6bfa-4988-baf4-acd4f0ab08ab",
          title: "Pensamento Computacional",
          description:
            "Como programadores pensam para construir suas aplicações? Nessa aula vamos entender o que de fato é 'Pensamento Computacional' e 'Lógica de Programação'.",
          course_id: "323ae098-1624-4e24-8607-1f3a04718b11",
        },
        {
          id: "2052d059-7d1f-4538-99de-cf4d9e9c1903",
          title: "Função de Seta | Arrow Function",
          description:
            "Que tal simplificar a forma com que escrevemos funções? Nessa aula vamos aprender a forma Arrow Function de se escreve-las.",
          course_id: "323ae098-1624-4e24-8607-1f3a04718b11",
        },
        {
          id: "212b6afc-c372-4c12-b6c4-dd616c8492cd",
          title: "Hardskills para UX Design",
          description:
            "Nesta aula o instrutor relaciona as habilidades técnicas, ou hardskills, a três grandes blocos em que subdivide a área de UX, e convida você a analisar essas habilidades de acordo com o seu contexto de negócio.",
          course_id: "d1cb69bc-ad2b-4b29-abcc-d2514b0c57ed",
        },
        {
          id: "8f17d3e5-189e-4e30-8fd6-5f70d5bd70c3",
          title: "Principais Dúvidas",
          description:
            "Nesta aula, vamos recapitular os conceitos principais do curso, aproveitando para responder as perguntas mais frequentes relacionadas a UX/UI Design.",
          course_id: "d1cb69bc-ad2b-4b29-abcc-d2514b0c57ed",
        },
        {
          id: "ff89dbdb-d4f7-42df-9935-8cd2c07a25e3",
          title: "Relevância do JavaScript",
          description:
            "Se você é como a maioria das pessoas, usa javascript todos os dias sem nem perceber. Mas de onde vem essa linguagem de programação onipresente? E mais importante, por que é tão útil?",
          course_id: "23856860-f5b9-4b71-a92f-546902b8348c",
        },
        {
          id: "3c7b7e2c-d388-4da0-a157-cf67e9afb599",
          title: "Criando um app com Power Apps",
          description:
            "Nessa aula vamos explorar a interface do Microsoft Power Apps, a criação de um aplicativo a partir de um modelo e verificar outras possibilidades de fontes de dados.",
          course_id: "2ba9f95a-e17a-4ede-b754-0f73d36c3b42",
        },
        {
          id: "3363b5ab-26ed-498f-8034-bb222aa14da5",
          title: "Conclusão e revisão",
          description:
            "A utilização de aplicativos low code tende a crescer nos próximos anos, mas é importante destacar que essas ferramentas não substituem o desenvolvimento de software. Apesar disso, apresentamos alguns benefícios nesta conclusão.",
          course_id: "2ba9f95a-e17a-4ede-b754-0f73d36c3b42",
        },
        {
          id: "52aa2914-b492-4446-b9bf-70f746f1fa9f",
          title: "O servidor web e a aplicação",
          description:
            "Nessa aula estudaremos sobre servidor web e qual o papel dele no contexto de aplicações web e também iremos conhecer o servidor de aplicação. Além disso, veremos como as aplicações web são estruturadas e como são criadas.",
          course_id: "468dbdd9-66bf-48ed-91fa-3dfdec5fba4e",
        },
        {
          id: "cddb551f-9d16-40c7-b83c-0e8f04d3dd28",
          title: "Outros Métodos para Manipular Arrays",
          description:
            "Sabendo adicionar e remover itens de arrays, que tal agora vermos como funcionam operações mais avançadas para busca de dados e manipulação nessa estrutura?",
          course_id: "a69ee6be-b292-4cb9-a9a5-36481689a800",
        },
        {
          id: "852eb8b0-0286-44e0-b793-170b5dcb5b21",
          title: "O Conceito de Pilhas",
          description:
            'Você já ouviu falar no termo "FILO - First In Last Out"? Nessa aula vamos conhecer a estrutura de dados chamada Pilha, como ela funciona e quais são as aplicações de uso para ela.',
          course_id: "a69ee6be-b292-4cb9-a9a5-36481689a800",
        },
        {
          id: "482decfc-203c-4107-856e-39b5c2f52327",
          title: "Tabelas Hash",
          description:
            "Outra estrutura muito utilizada quando o objetivo é ter performance em busca de dados numa base grande é a tabela hash. Nessa aula iremos entender como é o seu funcionamento e porque ela é tão performática.",
          course_id: "a69ee6be-b292-4cb9-a9a5-36481689a800",
        },
        {
          id: "9fb26ec9-a65d-4054-8c58-9433d554d9c4",
          title: "Apresentação do curso e instrutora",
          description:
            "Pollyanna Gonçalves, formada em Ciência da Computação na Universidade Federal de Ouro Preto, possui onze anos na área de dados e já publicou diversos artigos científicos nacionais e internacionais. Conheça a instrutora que vai te ensinar como obter pensamento analítico e tomar decisões orientadas a dados.",
          course_id: "8aabd52a-9de6-460d-ae89-7bab57ab9b27",
        },
        {
          id: "0ecdd723-486b-47da-a077-2a9fc5841d57",
          title: "O que são Vieses Cognitivos",
          description:
            "Tudo o que você aprendeu até hoje trouxe à sua mente diversos vieses cognitivos. Afinal, você sabe o que é isso? Nesta aula, Pollyanna Gonçalves irá explicar detalhadamente do que se trata e como identificá-los, além de mostrar quais são os principais vieses.",
          course_id: "8aabd52a-9de6-460d-ae89-7bab57ab9b27",
        },
        {
          id: "56ce9f35-17b5-4c99-ae2c-17c163e074f9",
          title: "Aprimorando o pensamento analítico",
          description:
            "Nesta aula, Pollyanna Gonçalves vai explicar algumas formas de aprimorar o pensamento analítico, como aprender coisas novas e olhar para outros pontos de vista.",
          course_id: "8aabd52a-9de6-460d-ae89-7bab57ab9b27",
        },
        {
          id: "dd33ed0e-c6d5-4a44-9916-f800e595743c",
          title: "O papel do designer",
          description: "...",
          course_id: "310b41eb-f40c-4d0e-a0c9-311f2d67c7dc",
        },
        {
          id: "2a24f966-fdae-4118-afca-de065db2da45",
          title: "Design centrado no usuário",
          description: "...",
          course_id: "310b41eb-f40c-4d0e-a0c9-311f2d67c7dc",
        },
        {
          id: "c9523895-3f0c-4e76-9d87-45fc42e6a88b",
          title: "Definição da persona",
          description: "...",
          course_id: "310b41eb-f40c-4d0e-a0c9-311f2d67c7dc",
        },
        {
          id: "e7c62302-89b6-4739-8049-343bff0a5b5b",
          title: "Validar para entender",
          description: "...",
          course_id: "310b41eb-f40c-4d0e-a0c9-311f2d67c7dc",
        },
        {
          id: "12e56353-6a94-4017-be3d-f0ff9dbcf2d7",
          title: "Configuração do Ambiente",
          description:
            "Conheça o CodePen, a ferramenta que escolhemos para esse curso visando a facilidade de acesso, configuração e recursos visuais instantâneos, para melhorar a sua experiência de aprendizado.",
          course_id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
        },
        {
          id: "20f3558d-6177-462d-83f1-7e5b2b083dd7",
          title: "Elementos de Bloco",
          description:
            "Nessa aula, você vai aprender sobre os elementos de bloco (block) que ocupam todo o espaço horizontal disponível na estrutura e sempre iniciam uma nova linha na página.",
          course_id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
        },
        {
          id: "d89c2ffa-09c3-424d-993f-05f42e20130d",
          title: "Seletores, Classes e Pseudo-classes",
          description:
            'Como dizer para o navegador que você quer que somente o título fique azul, e não o site inteiro? Existem várias formas de "selecionar" um elemento ou conjunto deles e formatar. Nessa aula você aprenderá sobre: seletores, classes e pseudo-classes.',
          course_id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
        },
        {
          id: "a55cf956-6dc4-42e9-962d-8b5a6b05d0c8",
          title: "Levando para o ambiente local",
          description:
            "No próximo passo do projeto, você vai levar o site para o ambiente local da sua máquina para personalizar o site com suas informações e fotos.",
          course_id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
        },
        {
          id: "75bbf371-85cb-4664-9e82-3f20084bb161",
          title: "Boas-vindas",
          description: "...",
          course_id: "0636249f-b631-4804-8767-7e721a5271b0",
        },
        {
          id: "95acc054-e667-4444-b4be-5e58c64fab0f",
          title: "Confidencialidade, Integridade e Disponibilidade",
          description: "...",
          course_id: "0636249f-b631-4804-8767-7e721a5271b0",
        },
        {
          id: "a57f79c3-8d1d-4d9a-bd2b-3db62cae62e7",
          title: "Revisão e Próximos Passos",
          description:
            "Vamos revisar tudo o que aprendemos até aqui e descobrir quais são os próximos passos para você evoluir na sua carreira.",
          course_id: "323ae098-1624-4e24-8607-1f3a04718b11",
        },
        {
          id: "65e694e2-b384-483e-bfd7-557df94afe4f",
          title: "Conhecendo o Visual Studio Code",
          description:
            "Agora que temos escolhida a aplicação que será utilizada nos próximos cursos de desenvolvimento com JavaScript, chegou a hora de instalar e conhecermos um pouco sobre o Visual Studio Code e o que ele tem a oferecer.",
          course_id: "1a99deef-b707-4431-ae13-22a82c9b94eb",
        },
        {
          id: "8f350488-609f-45c6-991a-6df162e72068",
          title: "Principais atalhos do VS Code",
          description:
            "Com o VS Code já instalado, nessa aula iremos aprender os principais atalhos do teclado para que possamos acompanhar os próximos cursos com essa ferramenta de forma mais eficiente e também para trabalhar com mais conforto no dia a dia.",
          course_id: "1a99deef-b707-4431-ae13-22a82c9b94eb",
        },
        {
          id: "837e1a6b-bd9a-4503-9ab0-fd253fad1c47",
          title: "Sistemas Operacionais",
          description:
            "Com o VS Code configurado, vamos agora passar brevemente pelos três principais sistemas operacionais e descobrir qual a recomendação de uso do instrutor.",
          course_id: "1a99deef-b707-4431-ae13-22a82c9b94eb",
        },
        {
          id: "6937c617-4810-4fe0-a2ee-cda377784f45",
          title: "Apresentação do curso e instrutor",
          description:
            "Seja muito bem-vindo e bem-vinda ao curso de Git e GitHub na prática. Conheça o instrutor Pedro Lacerda que te acompanhará durante esse curso e já tenha um gostinho de tudo que está por vir.",
          course_id: "5286cb1e-96d7-4504-a66b-430262244dc8",
        },
        {
          id: "2a172e46-19af-43e6-bf44-e17555e71827",
          title: "Git vs GitHub",
          description:
            "Git e GitHub são coisas diferentes. Mas o que exatamente cada uma dessas ferramentas faz? Como podemos usá-las em conjunto? \nNessa aula, descubra as respostas para todas essas perguntas e crie a sua conta gratuita na plataforma GitHub para que possamos, juntos, praticar os primeiros conceitos abordados no curso.",
          course_id: "5286cb1e-96d7-4504-a66b-430262244dc8",
        },
        {
          id: "a8ae6998-66f4-415b-9e78-6ab21468f529",
          title: "Branches",
          description:
            "Nessa aula nós vamos trabalhar com branches, ou ramificações, no GitHub, entender como e quando devemos usar essa funcionalidade tão importante para a organização dos seus projetos.",
          course_id: "5286cb1e-96d7-4504-a66b-430262244dc8",
        },
        {
          id: "bd6437b4-79d4-4ad7-acf3-ed87de71bc46",
          title: "Restaurando o repositório",
          description:
            "Nessa aula veremos como podemos fazer para restaurar um repositório para uma versão anterior caso tenhamos algum problema.",
          course_id: "5286cb1e-96d7-4504-a66b-430262244dc8",
        },
        {
          id: "36098b8d-2865-46ab-8951-b5a29406d37a",
          title: "Proteção de branches",
          description:
            "Agora que temos o repositório restaurado para a última versão estável, vamos descobrir o que pode ser feito para que esse tipo de problema não venha a acontecer novamente com este e nenhum outro repositório.",
          course_id: "5286cb1e-96d7-4504-a66b-430262244dc8",
        },
        {
          id: "6ecda04a-913b-4335-863f-2ecf1ab8725c",
          title: "Revertendo alterações",
          description:
            "Já sabemos que o Git é uma ferramenta de versionamento de arquivos e também sabemos como salvar modificações nos branches, mas como fazemos para restaurar um arquivo para a versão anterior a um commit específico?",
          course_id: "5286cb1e-96d7-4504-a66b-430262244dc8",
        },
        {
          id: "92dbe448-a4b1-4680-9131-a87e5dad7cb6",
          title: "Apresentação do curso e instrutora",
          description:
            "Nessa aula, receba as boas-vindas da instrutora Daniele Leão, que irá te guiar durante todo o seu Staart em Banco de Dados. Fique por dentro de tudo que será abordado no curso.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "6de4c7f5-cb34-499f-9345-626fb293774a",
          title: "O que é Banco de Dados",
          description:
            "Para iniciar o curso com chave de ouro, nada melhor que começarmos com a pergunta “O que é um banco de dados?”. Nessa aula, Daniele explica o conceito de banco de dados, qual a necessidade de uso dessa ferramenta por grande maioria de todas as aplicações que existem e também irá te mostrar o desenho do projeto que será desenvolvido ao longo das próximas aulas.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "c2172efe-4741-4eee-9d3b-cce28e684f67",
          title: "Comando Select",
          description:
            "Nessa aula, vamos conhecer o comando SELECT que é utilizado quando queremos selecionar itens de tabelas no banco.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "c1564dab-c218-45d5-97a8-67580c6e3c4b",
          title: "Operadores - In, Between, Diferente e Igual",
          description:
            "Partindo para algo um pouco mais avançado, nessa aula iremos conhecer alguns operadores que podem auxiliar na personalização de buscas em banco de dados.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "d137fa86-97ad-45fe-9cd5-c533a71207ea",
          title: "Conclusão",
          description:
            "Receba os parabéns por ter chegado até aqui e relembre alguns dos principais aprendizados adquiridos ao longo do curso.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "184ebf1d-02db-4f0a-90ed-f49349872aa5",
          title: "Execução de scripts no Node.js",
          description:
            "Nessa aula veremos como podemos automatizar comandos com o package.json usando o NPM.",
          course_id: "2b7e134e-87c3-40fb-885e-2fd438c9d4ea",
        },
        {
          id: "58cbc57d-5ab3-45dc-9ca1-97a429bfa19d",
          title: "Operadores lógicos",
          description:
            "Nessa aula iremos conhecer e utilizar o operador nullish coalescing e revisar o uso dos operadores || e &&.",
          course_id: "2b7e134e-87c3-40fb-885e-2fd438c9d4ea",
        },
        {
          id: "03368cc3-9103-4606-9514-31e64a9fe7c7",
          title: "Manipulação de vetores",
          description:
            "Nessa aula teremos um recap dos principais métodos para manipulação de vetores e exemplos de uso prático.",
          course_id: "2b7e134e-87c3-40fb-885e-2fd438c9d4ea",
        },
        {
          id: "3861b4bc-5ebe-413f-bd93-31b5b495d031",
          title: "Escopo",
          description:
            "A criação de variáveis de acordo com a palavra reservada (var, let ou const) e o contexto em que são criadas podem ocasionar aqueles erros invisíveis aos olhos, quando tudo parece estar correto mas as características do JavaScript impedem o código de ser executado. \n\nNessa aula iremos conhecer quais são essas características e como podemos fazer um melhor uso do JavaScript afim de contornar os possíveis erros de execução.",
          course_id: "2b7e134e-87c3-40fb-885e-2fd438c9d4ea",
        },
        {
          id: "d1932733-75f6-4e26-863d-f7837f131027",
          title: "Debug",
          description:
            "O Debug (ou Depuração, em português) é uma prática comumente utilizada para descobrir onde está acontecendo alguma falha no software para assim podermos resolver. Existem diversas formas para executar essa prática nos nossos projetos e, nessa aula, a Keilla irá nos mostrar uma delas.",
          course_id: "2b7e134e-87c3-40fb-885e-2fd438c9d4ea",
        },
        {
          id: "5a4fb480-d0fc-413f-ab72-d3d12a3a615e",
          title: "Sistema de Módulos do JavaScript",
          description:
            "Nessa aula iremos entender como funciona o sistema de módulos do JavaScript e a maneira como podemos importar e exportar valores entre diferentes arquivos.",
          course_id: "2b7e134e-87c3-40fb-885e-2fd438c9d4ea",
        },
        {
          id: "4868c1d4-6b8f-4a54-b779-caeb201443e5",
          title: "Encerramento",
          description:
            "Parabéns por ter chegado até aqui! Nessa aula, receba os parabéns da instrutora Keilla e vamos recaptular tudo que foi aprendido durante o curso.",
          course_id: "2b7e134e-87c3-40fb-885e-2fd438c9d4ea",
        },
        {
          id: "d5566701-ebcc-4806-8e79-798ec9d93d6c",
          title: "Programação assíncrona com promises",
          description:
            "Como vimos até aqui, trabalhar com callbacks pode ser um pouco complicado né? Aquele amontoado de callbacks aninhadas formando o chamado “callback hell” dá medo em qualquer um e não é à toa que recebe esse nome.  \nFoi pensando em resolver justamente esse problema que surgiram as Promises. Uma nova forma de trabalhar com códigos assíncronos sem ter que lidar com callback hell.",
          course_id: "23056992-cbf3-4f02-929f-fbe3e996627e",
        },
        {
          id: "c92841ed-371a-4356-b201-1220992d2e32",
          title: "Desafio com promises",
          description:
            "Voltando ao exercício prático que fizemos com callbacks onde buscamos por posts de uma rede social, iremos dessa vez resolvê-lo utilizando promises.",
          course_id: "23056992-cbf3-4f02-929f-fbe3e996627e",
        },
        {
          id: "7d3e0a2f-183d-4b2a-8770-22fe1a5bf5eb",
          title: "Programação assíncrona com EventEmitters",
          description:
            "Event Emitters são um dos conceitos mais importantes no Node.js, pois é com eles que emitimos eventos, que podem ser ouvidos por outros objetos no programa. É através dessa arquitetura que podemos conectar pedaços de código distantes entre si.",
          course_id: "23056992-cbf3-4f02-929f-fbe3e996627e",
        },
        {
          id: "c65b26c2-46dd-42ae-b9d3-df95006b1fd6",
          title: "Entendendo generators",
          description:
            "Generators são funções especiais que podem ser executadas, pausadas e continuadas em diferentes estágios da sua execução, tudo isso graças a nova palavra reservada yield. Nessa aula iremos entender como isso funciona na prática e quais problemas podemos resolver com isso.",
          course_id: "23056992-cbf3-4f02-929f-fbe3e996627e",
        },
        {
          id: "7a997f59-cb44-484f-81a9-fe9ea1395e50",
          title: "Generators",
          description:
            "Nessa aula iremos aplicar o uso de Generators na prática para entendermos ainda mais como se dá o seu funcionamento em um problema fictício.",
          course_id: "23056992-cbf3-4f02-929f-fbe3e996627e",
        },
        {
          id: "89b6d4d4-47f1-4faa-aa76-60ff358a06c4",
          title: "Pré-processadores CSS",
          description:
            "Como você já sabe, estamos usando um framework CSS chamado Tailwind para construir toda a estilização do nosso projeto. Uma coisa que você pode não ter notado é que estamos carregando todo o Tailwind direto do servidor para o nosso site mesmo não precisando utilizar todas as suas funcionalidades. Isso acaba gerando um aumento no tempo de carregamento da página e pode muitas vezes frustrar usuários que venham a utilizar o site. Nessa aula iremos aprender como fazer o uso correto desse framework, permitindo que seja baixado apenas o conteúdo necessário para o carregamento correto da nossa aplicação.",
          course_id: "ede24be4-c7f7-4190-b13a-1c178b4849c0",
        },
        {
          id: "9d27493f-e924-4a73-aa73-7fa8b1e92e3f",
          title: "Nunca é um adeus",
          description:
            "Parabéns por ter chegado até aqui e ter concluído mais uma etapa da sua jornada. Vamos passar pelos ponto de aprendizado desse curso?",
          course_id: "ede24be4-c7f7-4190-b13a-1c178b4849c0",
        },
        {
          id: "8460f0d5-aa0d-4a90-be7a-80397c9bd3dc",
          title: "Olá, mundo!",
          description:
            "Nessa aula iremos iniciar a construção da nossa aplicação React. Para isso, começaremos entender na prática, como funciona o processo de renderização de elementos na tela com o react-dom.",
          course_id: "afc1ef67-d0fa-4f96-824d-3dd90eab1c12",
        },
        {
          id: "266113f7-53e0-490e-90ed-b79ef05217d8",
          title: "Componentes React",
          description:
            "Um dos principais conceitos do React são os componentes. Componentes nada mais é do que uma forma de reutilizarmos pedaços de código que se repetem na interface.\nNessa aula iremos entender como criar componentes e como utilizá-los.",
          course_id: "afc1ef67-d0fa-4f96-824d-3dd90eab1c12",
        },
        {
          id: "47e865c8-16e7-4cd6-bf34-f3b1d698e08c",
          title: "Feed sem itens",
          description:
            "Agora que construímos a listagem de itens no feed, iremos construir como irá ficar o estilo quando o feed não possuir itens.",
          course_id: "afc1ef67-d0fa-4f96-824d-3dd90eab1c12",
        },
        {
          id: "edef86dc-688c-4a0b-b267-2965541b0b48",
          title: "Adicionando posts: Valor digitado",
          description:
            "Nessa aula iremos capturar não apenas o evento de submit do formulário como também os valores digitados nos campos de input, para assim, exibirmos esse dado como elemento na tela.",
          course_id: "afc1ef67-d0fa-4f96-824d-3dd90eab1c12",
        },
        {
          id: "c9df3d6c-27e7-41d7-81a9-cc1001bf0f09",
          title: "Encerramento",
          description:
            "Parabéns por ter concluído mais uma etapa da sua jornada! Vamos relembrar tudo que aprendemos?",
          course_id: "afc1ef67-d0fa-4f96-824d-3dd90eab1c12",
        },
        {
          id: "99dd7673-2f99-4fbb-8e65-19747686d39f",
          title: "Política de segurança",
          description:
            "Quando falamos de conexão entre um cliente e o servidor, estamos tratando de muitas variáveis. Uma delas é a Same-origin policy que é uma política de segurança que basicamente dita quais as origens de clientes que podem se conectar com o servidor.",
          course_id: "74924a45-f351-456c-8667-80cdfd29249d",
        },
        {
          id: "517e1d36-4fe7-4381-b11e-6e564396571e",
          title: "Tratamento de erros",
          description:
            "E se alguma requisição da nossa aplicação para a API falhar, o que acontece? Para contornar esse tipo de situação (que sempre existe a possibilidade de acontecer) é necessário tomar alguns cuidados. Para isso, podemos capturar os erros e tratá-los buscando sempre a melhor experiência para os usuários.",
          course_id: "74924a45-f351-456c-8667-80cdfd29249d",
        },
        {
          id: "534141bc-6521-4c21-a1bf-680f1d92edf8",
          title: "Refatorando o código",
          description:
            "Como você pôde perceber, muita coisa foi construída já pensando nas melhores práticas para a reutilização de componentes, mas ainda assim algumas coisas podem ser melhoradas. Bora lá?",
          course_id: "74924a45-f351-456c-8667-80cdfd29249d",
        },
        {
          id: "8eb26a62-01de-4696-8a80-4245215b29c2",
          title: "Camada Services",
          description:
            "É bastante comum que sites realizem requisições HTTP para serviços externos, como o que estamos construindo. Pensando nisso, é comum querermos separar tudo que é referente à comunicação da nossa aplicação com APIs, já que isso vai ajudar bastante na manutenibilidade do projeto.",
          course_id: "74924a45-f351-456c-8667-80cdfd29249d",
        },
        {
          id: "e19fb47c-84df-4c85-9729-1d6a1f05522e",
          title: "Seção sobre mim",
          description: "...",
          course_id: "2550c365-0d30-4405-a021-d739117064c8",
        },
        {
          id: "3abc92ce-e564-453a-b4f6-12a41186129c",
          title: "REST APIs",
          description:
            "Agora que sabemos o que é uma API, iremos compreender como funciona o REST, que nada mais é do que uma padronização criada para mantermos a arquitetura de uma API o mais escalável e manutenível possível.",
          course_id: "62a5ba54-7754-42c1-a30f-f0ae7eea5507",
        },
        {
          id: "caf70b2d-b656-41fe-9ae7-d2134455c93f",
          title: "HTTP: Request e Response",
          description:
            "Nessa aula vamos conhecer a estrutura de um objeto de Requisição e Resposta HTTP. Isso vai nos ajudar na compreensão de como as mensagens HTTP são enviadas e recebidas entre APIs e Clientes.",
          course_id: "62a5ba54-7754-42c1-a30f-f0ae7eea5507",
        },
        {
          id: "4e80d0cd-5bf5-41ee-9c29-3524052c06f4",
          title: "Apresentação do curso e instrutora",
          description:
            "Receba as boas vindas da instrutora Keilla Menezes e fique por dentro de tudo que está por vir nesse curso.",
          course_id: "2b7e134e-87c3-40fb-885e-2fd438c9d4ea",
        },
        {
          id: "1947a373-ce10-4236-bc71-e414d8d3a99c",
          title: "Resolução do desafio",
          description:
            "Nessa aula iremos resolver juntos o desafio com o Express proposto na aula anterior.",
          course_id: "62a5ba54-7754-42c1-a30f-f0ae7eea5507",
        },
        {
          id: "843c5071-9a01-46f0-aa9d-61b227927f13",
          title: "Criando aplicações usando o NPM",
          description:
            "Com o Node.js instalado, vamos dar os primeiros passos na construção de um projeto usando o seu gerenciador de pacotes: o Node Package Manager, ou NPM.",
          course_id: "2b7e134e-87c3-40fb-885e-2fd438c9d4ea",
        },
        {
          id: "55a91534-2e2d-4741-a566-c7abc4c9dfd4",
          title: "Roteamento e Middlewares",
          description:
            "Agora que conhecemos como funciona o Express para a construção de rotas em uma API, iremos aprender sobre algumas das funcionalidades extras que esse framework traz ainda se tratando sobre rotas e organização do código.",
          course_id: "62a5ba54-7754-42c1-a30f-f0ae7eea5507",
        },
        {
          id: "6ba49534-e43f-41bf-8a90-82a9f94c755c",
          title: "Yarn",
          description:
            "Até aqui, você aprendeu como utilizar o gerenciador de pacotes que vem junto com o Node.js, o NPM. Agora iremos conhecer um novo gerenciador de pacotes chamado Yarn e como instalar pacotes do NPM utilizando essa ferramenta.",
          course_id: "2b7e134e-87c3-40fb-885e-2fd438c9d4ea",
        },
        {
          id: "a260932a-6473-46b6-b932-56d7e416b6be",
          title: "Erros de domínio",
          description:
            "Até aqui identificamos alguns problemas de erros que estão sendo repetidos em mais de um lugar do nosso código. Nessa aula, o nosso objetivo é criar uma estrutura onde poderemos reaproveitar um mesmo código para lançar erros e centralizá-los em um mesmo lugar.",
          course_id: "62a5ba54-7754-42c1-a30f-f0ae7eea5507",
        },
        {
          id: "a89d4594-a141-4c51-ba5e-30c3e5c5f57c",
          title: "Null vs undefined",
          description:
            "Null e undefined parecem significar a mesma coisa para o JavaScript, não? Nessa aula entenda a diferença entre esses dois tipos de dados.",
          course_id: "2b7e134e-87c3-40fb-885e-2fd438c9d4ea",
        },
        {
          id: "25f0d6b6-6626-4abf-999d-9d4c09d84cdc",
          title: "Banco de Dados",
          description:
            "Nessa aula iremos conectar a nossa API com um banco de dados real, substituindo o banco de dados falso que estamos utilizando até então.",
          course_id: "62a5ba54-7754-42c1-a30f-f0ae7eea5507",
        },
        {
          id: "20491d68-2ba2-43b0-b737-15b12fdda13f",
          title: "Desestruturação",
          description:
            "Uma ótima forma de se trabalhar com objetos é usando a desestruturação. Isso permite com que possamos nomear valores de propriedades em novas variáveis sem ter que ficar buscando-os de forma manual. \n\nNessa aula iremos aprender como utilizar dessa funcionalidade do JavaScript.",
          course_id: "2b7e134e-87c3-40fb-885e-2fd438c9d4ea",
        },
        {
          id: "76d1257f-61dd-4442-80e1-0c45cec8d768",
          title: "Migrations",
          description:
            "Nessa aula iremos conhecer um padrão bastante utilizado por desenvolvedores para o versionamento de banco de dados. Parece confuso? Não é nada complexo :)",
          course_id: "62a5ba54-7754-42c1-a30f-f0ae7eea5507",
        },
        {
          id: "34ab401b-0a33-4082-bd7b-aad67e94257b",
          title: "Bastidores do Node.js",
          description:
            "Partindo um pouco mais para o conceito prático, nessa aula iremos entender como o Node.js consegue executar seus processos e o que é Blocking e Non-Blocking I/O.",
          course_id: "23056992-cbf3-4f02-929f-fbe3e996627e",
        },
        {
          id: "30cf5bdd-9e33-4dfd-9563-d276adf5706b",
          title: "Encerramento",
          description:
            "Parabéns por ter concluído mais uma etapa da sua jornada. Vamos relembrar tudo que aprendemos até aqui?",
          course_id: "62a5ba54-7754-42c1-a30f-f0ae7eea5507",
        },
        {
          id: "ca330f05-18e0-4713-99e5-6a2c70cc2f5e",
          title: "Blocking e Non-Blocking I/O na prática",
          description:
            "Nessa aula iremos construir dois tipos de códigos para entendermos melhor o funcionamento do Node.js: Um usando Blocking I/O e outro usando Non-Blocking I/O.",
          course_id: "23056992-cbf3-4f02-929f-fbe3e996627e",
        },
        {
          id: "1f291384-e2e2-4baa-8b49-5d2dbfee14de",
          title: "Primeiros Passos Quick Staart",
          description: "Conheça o projeto que vamos construir juntos!",
          course_id: "53cf1b57-cd2d-4fef-8e2a-75a04faab3e8",
        },
        {
          id: "3e0f9bc4-ed9a-46ce-ba25-cbdca335c834",
          title: "Callbacks na prática",
          description:
            "Nessa aula iremos colocar em prática o conhecimento obtido até aqui com callbacks em um desafio que simula requisições HTTP a uma rede social.",
          course_id: "23056992-cbf3-4f02-929f-fbe3e996627e",
        },
        {
          id: "393d254b-6375-4ca9-bbd5-a3d309893660",
          title: "Aula Bônus",
          description:
            "Conteúdo extra disponibilizado exclusivamente para os alunos da plataforma durante a semana aberta gratuita que criamos para pessoas não técnicas terem seu primeiro contato com programação, a Quick Staart.",
          course_id: "53cf1b57-cd2d-4fef-8e2a-75a04faab3e8",
        },
        {
          id: "ff4f14a7-9d97-484d-b323-03049d56f003",
          title: "Tratamento de erro com promises",
          description:
            "Assim como fizemos com callbacks, promises também precisam ter tratamento de erros e é isso que iremos aprender nessa aula: Como trabalhar com erros usando promises.",
          course_id: "23056992-cbf3-4f02-929f-fbe3e996627e",
        },
        {
          id: "0bf2ee71-d58e-4460-8b0c-1a17a253649c",
          title: "Trabalhando com múltiplas promises",
          description:
            "Sabe quando queremos executar mais de uma promise onde o resultado de uma não influencia na outra e poderíamos executá-las de forma paralela? A classe global “Promise” nos permite trabalhar com múltiplas promises de várias maneiras e é exatamente isso que iremos aprender nessa aula.",
          course_id: "23056992-cbf3-4f02-929f-fbe3e996627e",
        },
        {
          id: "05ef852c-2ec1-4eaa-8f9e-bdb5427199fe",
          title: "Plugins do Webpack",
          description:
            "Os plugins do Webpack são basicamente funcionalidades extras que podemos simplesmente baixar e acoplar ao Webpack por meio do arquivo de configurações. Nessa aula iremos conhecer um pouco sobre essa funcionalidade do Webpack e porque é necessário utilizá-la.",
          course_id: "ede24be4-c7f7-4190-b13a-1c178b4849c0",
        },
        {
          id: "899d6454-8ee2-4955-a3d3-190331d0e944",
          title: "Loaders",
          description:
            "Loaders é uma das principais funcionalidades do Webpack. Eles são pacotes extras que instalamos conforme a necessidade do projeto e basicamente são pré-processadores que nos permitem importar arquivos no JavaScript que normalmente não seriam compatíveis. Nessa aula iremos aprender como fazer uso dessas ferramentas.",
          course_id: "ede24be4-c7f7-4190-b13a-1c178b4849c0",
        },
        {
          id: "86776cf3-e362-4387-87d8-1bfc663eafcb",
          title: "Iniciando a aplicação",
          description:
            "Nessa aula iremos começar dar vida à nossa aplicação, passando a separar alguns arquivos por componentes e estilos seguindo uma estrutura padrão que será utilizada.",
          course_id: "afc1ef67-d0fa-4f96-824d-3dd90eab1c12",
        },
        {
          id: "80a69cd0-ab3b-4d48-895d-ec5fa99c8b35",
          title: "Implementando o formulário",
          description:
            "Partindo de vez para a construção do nosso projeto, nessa aula iremos fazer a implementação do formulário por meio do HTML e CSS do componente.",
          course_id: "afc1ef67-d0fa-4f96-824d-3dd90eab1c12",
        },
        {
          id: "670d4658-bb67-4131-b2f8-213fbfd0f883",
          title: "Propriedades no React",
          description:
            "A aplicação está funcionando, mas ainda podemos acrescentar alguns pontos de melhora. Você percebeu que todo o nosso código está dentro de um componente App? Como podemos melhorar a estrutura do projeto para utilizarmos melhor o poder do React?",
          course_id: "afc1ef67-d0fa-4f96-824d-3dd90eab1c12",
        },
        {
          id: "6b7ed80b-f3b4-4242-9d03-a31679e7e9bd",
          title: "Rotas",
          description:
            "Com a nossa aplicação quase pronta, chegou a hora de entrarmos no assunto de rotas, que são basicamente as URLs que aparecem no navegador para cada página. Com isso será possível fazer navegação entre diferentes páginas.",
          course_id: "afc1ef67-d0fa-4f96-824d-3dd90eab1c12",
        },
        {
          id: "aa28bdab-c033-48bf-a0c3-bbcb12b64f87",
          title: "Apresentação do curso e instrutor",
          description:
            "Conheça tudo que será abordado no curso e quais os requisitos necessários para acompanhar essa nova etapa da sua jornada.",
          course_id: "74924a45-f351-456c-8667-80cdfd29249d",
        },
        {
          id: "4bcdd2f5-ec01-4b10-9ca5-efd3f45af98d",
          title: "CORS",
          description:
            "CORS é basicamente um conjunto de configurações que precisamos utilizar para que aplicações que estão em domínios diferentes conversem entre si. Nessa aula veremos como podemos aplicar essas configurações em nossos projetos e ver como isso funciona na prática.",
          course_id: "74924a45-f351-456c-8667-80cdfd29249d",
        },
        {
          id: "d816bbb5-01f0-472c-a415-88bc0e1600dd",
          title: "Criando novos posts",
          description:
            "Nessa aula iremos conectar o formulário de criação de posts com a API para que ela receba e salve esses dados. Tudo que iremos fazer será bem semelhante ao que já fizemos com as rotas de listagem de posts com a diferença que agora enviaremos dados para a API.",
          course_id: "74924a45-f351-456c-8667-80cdfd29249d",
        },
        {
          id: "7a1168bd-876b-42d8-9288-a468b6c8973f",
          title: "Tags mais comuns no HTML",
          description: "...",
          course_id: "2550c365-0d30-4405-a021-d739117064c8",
        },
        {
          id: "349934a5-f6bd-4181-8bdc-0f7bd6af331c",
          title: "Conhecendo o CSS",
          description: "...",
          course_id: "2550c365-0d30-4405-a021-d739117064c8",
        },
        {
          id: "18629558-14ea-47e4-b88e-aae91a3d3dc8",
          title: "Tipo e tamanho de fonte",
          description: "...",
          course_id: "2550c365-0d30-4405-a021-d739117064c8",
        },
        {
          id: "d26cb132-4d9d-4a6c-a199-cabfd3152430",
          title: "Seção de links",
          description: "...",
          course_id: "2550c365-0d30-4405-a021-d739117064c8",
        },
        {
          id: "eb67ebac-1297-416d-9d25-73063a194208",
          title: "O que é API",
          description:
            "Antes de entendermos o que é uma API REST, é necessário entendermos primeiro o que exatamente é uma API. É o que veremos nessa aula.",
          course_id: "62a5ba54-7754-42c1-a30f-f0ae7eea5507",
        },
        {
          id: "b5081ac7-f57f-431a-8549-b2dcaf27e3b0",
          title: "O módulo http do Node.js",
          description:
            "Começando com a mão na massa, iremos conhecer o módulo nativo do Node.js responsável por receber e enviar requisições HTTP. Esse é o módulo base para qualquer API criada com Node.js, seja utilizando algum framework ou não.",
          course_id: "62a5ba54-7754-42c1-a30f-f0ae7eea5507",
        },
        {
          id: "a7fcc7be-bbc3-46eb-bcdf-49189c39a768",
          title: "API de tarefas",
          description:
            "Nessa aula iremos implementar as rotas que a nossa API precisará ter. Com isso também iremos adicionar um código que simula um banco de dados para que possamos estar trabalhando com o código o mais próximo da realidade.",
          course_id: "62a5ba54-7754-42c1-a30f-f0ae7eea5507",
        },
        {
          id: "71d5b81f-0134-4094-ac2a-afb69abd9e1b",
          title: "Resolução do desafio",
          description:
            "Nessa aula iremos resolver junto com o instrutor o desafio proposto no fim da aula anterior.",
          course_id: "62a5ba54-7754-42c1-a30f-f0ae7eea5507",
        },
        {
          id: "2b1b8f26-d7f4-4a1e-909a-f6d2f50f3ce5",
          title: "Fundação",
          description:
            "Nessa aula iremos iniciar a construção da API de CRUD de usuários usando o Express e todos os conhecimentos adquiridos até agora.",
          course_id: "62a5ba54-7754-42c1-a30f-f0ae7eea5507",
        },
        {
          id: "94c21edd-2fd1-4548-9709-d5a3a9307eb7",
          title: "Memória",
          description:
            "Nessa aula iremos implementar as regras de negócio do CRUD de usuários ainda utilizando um banco de dados falso que logo iremos substituir por um banco de dados real.",
          course_id: "62a5ba54-7754-42c1-a30f-f0ae7eea5507",
        },
        {
          id: "6e8c7ea5-3ceb-4bdd-a76c-3ecaafd7b04f",
          title: "Validação",
          description:
            "Quando recebemos dados de requisições que precisarão ser salvos ou tratados pela nossa API, é importante garantirmos que esses dados estão no formato esperado para que tudo funcione corretamente. Nessa aula criaremos uma estrutura para lidar especificamente com essa parte da nossa aplicação.",
          course_id: "62a5ba54-7754-42c1-a30f-f0ae7eea5507",
        },
        {
          id: "718fe0ca-6f11-45cf-a877-c691d39e2a9c",
          title: "Dia 2 Quick Staart",
          description:
            "Nossa solução tem que ser fácil e intuitiva, por isso precisamos aprender a como dar forma as tags HTML que aprendemos. Nessa aula nosso objetivo é te ensinar a ser uma pessoa mais estilosa (assistindo a aula tudo fará sentido!), aplicando CSS na sua aplicação web 🎨 🖌️.",
          course_id: "53cf1b57-cd2d-4fef-8e2a-75a04faab3e8",
        },
        {
          id: "8bfc9e15-a2aa-42a3-aba6-b78d49677d0e",
          title: "Dia 3 Quick Staart",
          description:
            "Depois de entendermos HTML e CSS com suas diversas características, vamos dar vida ao nosso card - que é parte central da nossa solução.  Além disso, vamos ter um contato com programação! Vamos ver o que é o JavaScript e como adicionar nossa primeira linha de código 🥳 💻.",
          course_id: "53cf1b57-cd2d-4fef-8e2a-75a04faab3e8",
        },
        {
          id: "c3a85149-892d-4fbb-88aa-0b7632463717",
          title: "Dia 4 Quick Staart",
          description:
            "Terminamos nossa Semana da Programação da melhor maneira possível: programando! Você começa a sua construção de fundamentos na programação através da linguagem Javascript. Ao final da aula você terá sua sua aplicação para usuários utilizarem: terá feito o famoso deploy! 🤩",
          course_id: "53cf1b57-cd2d-4fef-8e2a-75a04faab3e8",
        },
        {
          id: "6a750559-fe05-411a-a22e-fe3c6d3e1044",
          title: "Funções",
          description:
            "Vamos juntar tudo o que aprendemos até aqui para criarmos na prática funções que facilitam e muito nossas vidas como programadores.",
          course_id: "323ae098-1624-4e24-8607-1f3a04718b11",
        },
        {
          id: "831c6dae-4e68-4203-b3a9-3d5f9c379c75",
          title: "JavaScript fora do navegador",
          description:
            "O que é o nodejs e o que o torna tão especial ? Explore a história e os principais tipos de uso dessa tecnologia.",
          course_id: "23856860-f5b9-4b71-a92f-546902b8348c",
        },
        {
          id: "c91f34d0-e483-4c67-b7e9-6cbc3351d32c",
          title: "Apresentação do curso e instrutor",
          description:
            "Leonardo Scorza, em seus onze anos de carreira, já passou por grandes empresas nacionais e internacionais e, recentemente, fundou a escola de programação onebitcode.\nConheça o instrutor que vai te guiar no início da sua jornada para se tornar um desenvolvedor web.",
          course_id: "19a31b7a-1286-4927-830e-564cbcd54a23",
        },
        {
          id: "49a0c053-e33b-4e99-8232-a4c3c6f51a6b",
          title: "Frameworks e libs",
          description:
            "Frameworks e libs, ou bibliotecas, são termos que talvez você nunca ouvir falar. Eles são responsáveis por ajudar a vida dos desenvolvedores web no dia a dia de trabalho. Leonardo Scorza ensinará, nesta aula, tudo o que você precisa saber sobre esses incríveis facilitadores!",
          course_id: "19a31b7a-1286-4927-830e-564cbcd54a23",
        },
        {
          id: "647c0d99-3164-4a94-bd8a-a837f171510f",
          title: "Instalação dos aplicativos Microsoft 365",
          description:
            "Nesta aula, você vai aprender a instalar o Microsoft Office 365 em seu computador e seus dispositivos móveis.",
          course_id: "f37347da-7fff-41c8-b66a-68fbbc28d9c5",
        },
        {
          id: "51fda1b1-ead8-456d-9167-cba6d17456a3",
          title: "Começando em Tecnologia",
          description:
            "Como usar partes iniciais de um computador e ferramentas para trabalhar de uma maneira conectada e colaborativa? Mário irá apresentar tudo isso nesta primeira aula.",
          course_id: "3b5792a0-d9e4-487c-ba13-275026be5efa",
        },
        {
          id: "9bc2509f-de41-46b6-a0b3-148588cb5a3f",
          title: "Processos: Idear, Prototipar e Avaliar",
          description:
            "Nesta aula, vamos conhecer diferentes técnicas de workshops e ferramentas para ideação, criação e prototipação. Esses métodos são essenciais para um profissional de design.",
          course_id: "d1cb69bc-ad2b-4b29-abcc-d2514b0c57ed",
        },
        {
          id: "cb856711-b2cb-4b89-bcf6-fb5d6fc132a3",
          title: "Tipos de profissionais",
          description:
            "Você já se perguntou o que diferencia os programadores especialistas dos generalistas? Qual o escopo de atuação de cada profissional? Conheça as particularidades e escopo de atuação desses segmentos.",
          course_id: "23856860-f5b9-4b71-a92f-546902b8348c",
        },
        {
          id: "2109c9ba-57ed-4fe9-a73e-2b23725bca5d",
          title: "Back End é pra mim?",
          description:
            "Nessa última aula, você descobrirá quais as principais características de um programador backend e como seu professor, Erick Wendel, entrou para essa área.",
          course_id: "23856860-f5b9-4b71-a92f-546902b8348c",
        },
        {
          id: "e32b3285-6824-4c4b-ac3a-97a320ef8ad0",
          title: "Conhecendo o HTML",
          description:
            "Como você já aprendeu, HTML é um dos principais elementos da tríade do Front-end.\nAfinal, HTML é ou não uma linguagem de programação? Nesta aula, Leonardo Scorza irá tirar essa dúvida, além de abordar muitas outras particularidades.",
          course_id: "19a31b7a-1286-4927-830e-564cbcd54a23",
        },
        {
          id: "63dc2315-95b2-4f84-9267-4419e6814d3c",
          title: "Outlook E-mail, Calendário e Microsoft To Do",
          description:
            "Nesta aula, você vai aprender a gerenciar e-mails, calendários e tarefas utilizando o Microsoft Outlook.",
          course_id: "f37347da-7fff-41c8-b66a-68fbbc28d9c5",
        },
        {
          id: "a4885aa1-3868-4302-9813-4c21c26e30d1",
          title: "Impacto da Transformação Digital",
          description:
            "Você vai entender o que é a transformação digital, como isso impacta sua empresa e o que você pode fazer para usar essas tecnologias a favor da sua empregabilidade",
          course_id: "3b5792a0-d9e4-487c-ba13-275026be5efa",
        },
        {
          id: "5a7a5e4f-f9b0-41ee-92bf-1b12437d130c",
          title: "Como funciona a web",
          description:
            "Navegadores, requisições, comunicação entre clientes e servidores, Back End e Front End. Talvez esses termos não sejam familiares mas, nesta aula, Leonardo Scorza irá desmistificá-los, de modo que você entenda o que é e como funciona cada um deles.",
          course_id: "19a31b7a-1286-4927-830e-564cbcd54a23",
        },
        {
          id: "d8b82dc6-4ae1-4223-a6f5-9359e52cacd8",
          title: "Conhecendo o react",
          description:
            "A biblioteca mais popular do JavaScript, o React, é utilizada em grandes corporações como facebook, netflix e spotify. Nesta aula, Leonardo Scorza vai introduzir as principais características dessa biblioteca, de modo que fique claro o motivo pelo qual ela é tão utilizada em todo o mundo.",
          course_id: "19a31b7a-1286-4927-830e-564cbcd54a23",
        },
        {
          id: "8bc7af05-643d-4f6c-a240-693ac7207c7a",
          title: "Mitos e verdades sobre programação",
          description:
            "Antes de seguir na sua jornada para se tornar um desenvolvedor web, é necessário fazer uma pausa para entender alguns mitos e verdades sobre programação.\nNesta aula, Leonardo Scorza responderá as principais dúvidas que surgem na cabeça de todo desenvolvedor iniciante.",
          course_id: "19a31b7a-1286-4927-830e-564cbcd54a23",
        },
        {
          id: "00340865-9910-41a2-bae1-559787fbc1cd",
          title: "Tipos Específicos do JavaScript",
          description:
            "Aprenda tipos de dados dentro de JavaScript, tais quais os primitivos, objetos e arrays.",
          course_id: "323ae098-1624-4e24-8607-1f3a04718b11",
        },
        {
          id: "b93adcc3-be6b-4c07-9c78-6ccb47ea9f82",
          title: "A visão de UX",
          description:
            "Como um UX Designer vê o mundo? Essa pergunta é respondida pelo instrutor, que apresenta o UX Honeycomb, um diagrama que explica quais os critérios que influenciam a ótica da Experiência do Usuário.",
          course_id: "d1cb69bc-ad2b-4b29-abcc-d2514b0c57ed",
        },
        {
          id: "16cfe20b-4269-4a7f-a641-63b1c617b88d",
          title: "Softskills para UX Design",
          description:
            "Nessa aula, o instrutor apresenta e exemplifica as principais competências comportamentais que colaboram com o desenvolvimento e diferenciação do profissional de UX Design.",
          course_id: "d1cb69bc-ad2b-4b29-abcc-d2514b0c57ed",
        },
        {
          id: "e5bbce53-d049-48d9-afac-4d73c47c5be5",
          title: "Introdução ao Design",
          description:
            "Os dois grandes pilares do design são: Design Centrado no Usuário e Design Thinking. Nesta aula, vamos entender o que é o trabalho do dia a dia relacionado a design para que você possa se desenvolver melhor.",
          course_id: "d1cb69bc-ad2b-4b29-abcc-d2514b0c57ed",
        },
        {
          id: "4105f8c7-f19b-4e00-8645-498db8d2c76c",
          title: "Características das linguagens de programação",
          description:
            "Javascript, C#, Java... Você deve estar se perguntando por que existem tantas linguagens de programação. Entenda as diferenças entre linguagens e suas aplicações.",
          course_id: "23856860-f5b9-4b71-a92f-546902b8348c",
        },
        {
          id: "91f19949-b10a-47fc-899e-8eb2a969016d",
          title: "Próximos Passos",
          description:
            "Seremos substituídos pela tecnologia? Mário responde nesta aula e explica como você pode se manter competitivo no mercado de trabalho.",
          course_id: "3b5792a0-d9e4-487c-ba13-275026be5efa",
        },
        {
          id: "9b2f5e07-1d9d-44c5-9daf-ddd51f482b80",
          title: "Introdução",
          description:
            "Imagine que você pudesse resolver seus problemas de negócios de maneira produtiva e eficiente, que pudesse criar seus aplicativos sem a necessidade de um conhecimento aprofundado em desenvolver softwares ou ciência da computação. Neste curso, apresentaremos as ferramentas para você executar essas tarefas.",
          course_id: "2ba9f95a-e17a-4ede-b754-0f73d36c3b42",
        },
        {
          id: "34d9ba84-627b-4a95-839e-be362492039b",
          title: "Alinhando a rota",
          description:
            "Conheça seu professor, o major aviador Carlos Melo, formado em ciências aeronáuticas e mestre pelo ITA, instituição na qual teve seu primeiro contato com programação e ciência de dados. Ele trabalhou com lançamento de satélites e um de seus desafios era o processamento de um volume de dados massivo neste ambiente.",
          course_id: "12e4c01f-a7ea-4c64-a656-8a9c7d0d3e61",
        },
        {
          id: "0fb88f7d-c0e3-4cfc-9245-54488dd34366",
          title: "Instrutor e curso",
          description:
            "Nesse curso quem acompanha você é o Willian Molinari, conhecido também como PotHix. Aqui você vai entender tudo que acontece quando digitamos o endereço de um site no navegador até o carregamento desse site, entendendo como dados trafegam pela internet até o seu computador ou smartphone.",
          course_id: "468dbdd9-66bf-48ed-91fa-3dfdec5fba4e",
        },
        {
          id: "6c74b2d5-9821-4c18-ab4d-22960fc72edd",
          title: "O Navegador",
          description:
            "Nessa aula iremos entender o que é o navegador. Todo o estudo será baseado no sistema operacional Linux e no navegador Google Chrome, visto que a grande maioria dos servidores usam Linux e, além de ter seu código utilizado por outros navegadores, fazendo dele o mais utilizado no mundo, o Google Chrome possui código aberto. Isso significa que podemos acessar esse código e estudá-lo a fundo.",
          course_id: "468dbdd9-66bf-48ed-91fa-3dfdec5fba4e",
        },
        {
          id: "bbbd989c-5a56-4d5a-ad00-d46c04107c4d",
          title: "Resolução de DNS",
          description:
            "Agora que entendemos o funcionamento dos navegadores, chegou a hora de conhecer a sigla “DNS” e porque as máquinas e navegadores não entendem nomes de sites como “app.staart.com” mas ainda assim conseguem acessá-los.",
          course_id: "468dbdd9-66bf-48ed-91fa-3dfdec5fba4e",
        },
        {
          id: "54519e5f-0b33-48f3-bb2f-d16bc62b2d56",
          title: "Revisão e próximos passos",
          description:
            "Chegou a hora de revisarmos tudo que foi aprendido nesse curso em tão pouco tempo. Receba os parabéns do instrutor.",
          course_id: "468dbdd9-66bf-48ed-91fa-3dfdec5fba4e",
        },
        {
          id: "9e37c30b-5fe5-45d4-9087-4656590444f8",
          title: "Ponto de Staart",
          description:
            "Conheça os instrutores que selecionamos para te guiar no seu aprendizado de estrutura de dados, ocnhecimento essencial para programadores e programadoras. Também conheça a ementa do curso e o que te espera.",
          course_id: "a69ee6be-b292-4cb9-a9a5-36481689a800",
        },
        {
          id: "75f778bc-4f16-4aa7-862b-86cd8f0fd883",
          title: "Tipos de dados no JavaScript",
          description:
            "Você conhece os tipos de dados do JavaScript? Nessa aula iremos passar por cada um deles e entender porque existem e para que servem.",
          course_id: "a69ee6be-b292-4cb9-a9a5-36481689a800",
        },
        {
          id: "83b66128-5df4-42b7-b401-12730a1a0b3a",
          title: "Adicionando e Removendo Itens de Arrays",
          description:
            "Agora que conhecemos um pouco da estrutura de arrays, chegou a hora de colocar a mão na massa e manipular os dados e entender como funcionam algumas operações básicas para adicionar e remover itens.",
          course_id: "a69ee6be-b292-4cb9-a9a5-36481689a800",
        },
        {
          id: "797f190d-f649-4dd8-93c3-bb8c76dc02f1",
          title: "Conclusão",
          description:
            "Você chegou até aqui e não poderia sair sem recapitular tanta coisa que foi aprendida durante o curso.",
          course_id: "a69ee6be-b292-4cb9-a9a5-36481689a800",
        },
        {
          id: "c42d41b0-db61-4739-b7b2-08e7ad5d4c1f",
          title: "Pensamento Analítico na prática",
          description:
            "Agora que você já aprendeu os elementos que compõem o pensamento humano, é hora de aplicar todos os elementos.  Nesta aula, Pollyanna Gonçalves utilizará um problema do mundo real para colocar em prática o pensamento analítico.",
          course_id: "8aabd52a-9de6-460d-ae89-7bab57ab9b27",
        },
        {
          id: "492e53d2-bf5c-4f3d-a91c-510e31822ccd",
          title: "Mais Vieses Cognitivos",
          description:
            "Até agora você viu os principais vieses cognitivos, mas ainda ainda não foram suficientes. Nesta aula, Pollyanna Gonçalves irá apresentar outros vieses importantes, de modo que você esteja preparado para identificar todos eles.",
          course_id: "8aabd52a-9de6-460d-ae89-7bab57ab9b27",
        },
        {
          id: "bc231f3f-cb07-41c4-9391-996b21d524eb",
          title: "Níveis de maturidade",
          description:
            "Nesta aula, Pollyanna Gonçalves vai abordar os três níveis de maturidade para se tomar decisões orientada a dados. Entenda quais são eles e em qual nível a corporação na qual você atua está.",
          course_id: "8aabd52a-9de6-460d-ae89-7bab57ab9b27",
        },
        {
          id: "e6334580-8dff-4f79-900f-3a09d54ab24c",
          title: "Definir o problema de UX",
          description: "...",
          course_id: "310b41eb-f40c-4d0e-a0c9-311f2d67c7dc",
        },
        {
          id: "6ab82887-c338-4e2d-a665-25515a18ae7d",
          title: "Diferentes formas de validação",
          description: "...",
          course_id: "310b41eb-f40c-4d0e-a0c9-311f2d67c7dc",
        },
        {
          id: "7b405310-5afd-4278-bfb1-815b86706b82",
          title: "Ponto de Largada",
          description:
            "Neste curso, você vai aprender a utilizar HTML e CSS para construir o seu primeiro site. A ideia deste curso é apresentar a base das tecnologias web, para que você consiga compreender o que acontece dentro dos principais frameworks utilizados no desenvolvimento de aplicações web.",
          course_id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
        },
        {
          id: "cd91b6ae-6553-44d9-85fa-96c4dd067eff",
          title: "Camadas de uma Página Web",
          description:
            "Os websites são divididos em 3 camadas: estrutura e conteúdo; apresentação; comportamento. Você vai entender exatamente o que isso significa e o que utilizamos para construir cada uma delas nessa aula.",
          course_id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
        },
        {
          id: "bfaa157f-8e34-4f62-9ec7-78c884299947",
          title: "Marcação de Formulários",
          description:
            "Aprenda a criar formulários para coletar informações do usuário, utilizando campos de texto, campos numéricos, seleção de datas em calendários, caixas de seleção múltipla, botões de opção única, botões de envio de informação e outros tipos de formulários que permitem a interação dos usuários com o seu site.",
          course_id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
        },
        {
          id: "0b6f007f-fcc6-400f-8d50-020214198459",
          title: "Box Model",
          description:
            "O navegador representa cada elemento como uma caixa retangular, de acordo com o padrão definido pelo CSS conhecido como box (caixa) model. Nesta aula você vai aprender na prática como isso funciona.",
          course_id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
        },
        {
          id: "8bfced50-6197-4134-aac1-00ab37ba7f8f",
          title: "Outras Propriedades do CSS",
          description:
            "Nesta aula, você vai aprender sobre o atributo Background, que é um atalho para definir os valores de fundo individuais de um local da folha de estilo; sobre o atributo Position, que é uma propriedade utilizada para determinar o posicionamento dos elementos na página; e sobre o atributo Visibility que pode mostrar ou ocultar um elementos da página sem afetar o layout do documento.",
          course_id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
        },
        {
          id: "1caa45ca-f191-475f-a634-8178f00869a4",
          title: "Tipos de Mídia",
          description:
            "Aprenda como deixar a apresentação do conteúdo do seu site adaptado a uma gama especifica de dispositivos, não precisando mudar o conteúdo em si.",
          course_id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
        },
        {
          id: "d3b4c4aa-58d9-49d0-871f-f8929e1afdda",
          title: "Conheça o Instrutor e o Conteúdo do Curso",
          description:
            "Rodrigo Gianotto é bacharel em ciência da computação pela Universidade Estadual Paulista -UNESP e já trabalhou como programador, analista de testes, gestor de projetos, entre outros, no Brasil e na Índia. Atualmente é diretor de tecnologia no Grupo Primo e seu objetivo com este curso é apresentar os principais cenários, cargos e desafios presentes em uma empresa de tecnologia.",
          course_id: "fc436ab1-50d9-4523-bc11-734bd2893f32",
        },
        {
          id: "c9c5e0e5-169a-4241-b739-5e068313f408",
          title: "Tipos de Arquiteturas Organizacionais",
          description:
            "Conheça os 3 Tipos de Arquiteturas Organizacionais, bem como os prós e os contras de cada modelo.",
          course_id: "fc436ab1-50d9-4523-bc11-734bd2893f32",
        },
        {
          id: "c4c7ba28-3680-48a2-aa28-00a750758f97",
          title: "Arquitetura Organizacional Aplicada ao Desafio",
          description:
            "Agora que você já conhece três arquiteturas organizacionais, veremos qual é o modelo utilizado no Grupo Primo, empresa referenciada no nosso desafio.",
          course_id: "fc436ab1-50d9-4523-bc11-734bd2893f32",
        },
        {
          id: "3621a48f-06a6-4a91-a448-9569c1271eaa",
          title: "Time Ágil",
          description:
            "Vamos conhecer definições e conceitos que compõem uma rotina ágil. Avançaremos no projeto levando as funcionalidades que nosso projeto demanda para o time que irá desenvolver a aplicação.",
          course_id: "fc436ab1-50d9-4523-bc11-734bd2893f32",
        },
        {
          id: "c32dd642-1a9b-4487-9c82-3e133f0e2565",
          title: "Testes de Software",
          description:
            "Vamos conversar sobre quem testa e quais os tipos de testes que podemos aplicar no nosso produto para que as falhas não cheguem ao usuário final.",
          course_id: "fc436ab1-50d9-4523-bc11-734bd2893f32",
        },
        {
          id: "2c6ae808-080a-4498-822d-68071d8d0217",
          title: "Back End vs Front End vs Mobile",
          description:
            "Conheça algumas diferenças nos conhecimentos demandados entre programadores que atuam como back end, front end e mobile. Vamos aprofundar alguns pontos durante essa aula.",
          course_id: "fc436ab1-50d9-4523-bc11-734bd2893f32",
        },
        {
          id: "5ab41dd1-9472-4f60-98ea-b908bf4eaa80",
          title: "A área de cibersegurança",
          description: "...",
          course_id: "0636249f-b631-4804-8767-7e721a5271b0",
        },
        {
          id: "2737f8f8-7eae-4d1e-a27a-73be8dc32e26",
          title: "Cyber Intelligence",
          description: "...",
          course_id: "0636249f-b631-4804-8767-7e721a5271b0",
        },
        {
          id: "eeddf235-ce47-427f-8909-c72d25eccf65",
          title: "Forense digital",
          description: "...",
          course_id: "0636249f-b631-4804-8767-7e721a5271b0",
        },
        {
          id: "3e021c24-33be-4703-8bf4-404f6d779d21",
          title: "Mais mitos e verdades",
          description: "...",
          course_id: "0636249f-b631-4804-8767-7e721a5271b0",
        },
        {
          id: "73f47d85-974b-4a96-bf9a-703124c29d31",
          title: "Conhecendo o terminal e seus comandos",
          description:
            "Com o WSL instalado e pronto para ser utilizado, vamos conhecer os principais comandos do terminal do Linux para manipulação de pastas e arquivos.  \n\nNão se preocupe se você nunca usou o terminal antes. Veremos como é algo bastante simples e que ao longo das próximas aulas e cursos, você terá ainda mais afinidade com essa ferramenta tão importante na vida de um programador ou programadora.",
          course_id: "1a99deef-b707-4431-ae13-22a82c9b94eb",
        },
        {
          id: "598ff4d7-b6a5-4e74-998f-f5547205a999",
          title: "Repositórios",
          description:
            "Agora que você já possui uma conta no GitHub, chegou a hora de conhecer um pouco das suas funcionalidades. Iremos começar entendendo melhor o que são repositórios e como criar o nosso primeiro repositório para deixar o seu perfil bonitão!",
          course_id: "5286cb1e-96d7-4504-a66b-430262244dc8",
        },
        {
          id: "b3332cc7-4a4e-4157-892f-e15ee02ce5ef",
          title: "Entendendo as árvores Git",
          description:
            "Nessa aula iremos conhecer os estágios por onde um arquivo passa antes de ser salvo, de fato, no repositório. Além disso, iremos aprender alguns comandos essenciais para o gerenciamento de alterações locais.",
          course_id: "5286cb1e-96d7-4504-a66b-430262244dc8",
        },
        {
          id: "936f80d5-c7c6-4102-ab44-83af4596a87a",
          title: "Mais alguns comandos do Git",
          description:
            "Continuando nossa jornada pelo Git, iremos conhecer mais alguns comandos que com certeza vão economizar o nosso tempo no dia a dia como desenvolvedor ou desenvolvedora.",
          course_id: "5286cb1e-96d7-4504-a66b-430262244dc8",
        },
        {
          id: "0a1f60a5-40bd-4a18-a197-8db775ac3b24",
          title: "Comandos úteis",
          description:
            "Nessa aula veremos alguns comandos que vão nos ajudar entender o estado do nosso trabalho, como por exemplo, ver o que foi alterado em um arquivo e todos os detalhes de quem alterou e quando essa alteração ocorreu.",
          course_id: "5286cb1e-96d7-4504-a66b-430262244dc8",
        },
        {
          id: "b3082821-80fb-421c-898e-ea62f9fc24a6",
          title: "Schemas",
          description:
            "O que são schemas no banco de dados? Nessa aula, Daniele te dará uma visão do que são, para que servem e como criar o seu primeiro schema.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "fa6cf606-5360-46c8-aebc-2db52b0da06e",
          title: "Entendendo e criando tabelas",
          description:
            "Agora que já passamos pelos schemas e tipos de dados no MySQL, chegou o momento de começarmos de fato a entender e colocar a mão na massa no principal recurso de um banco de dados: as tabelas.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "7a579815-6dff-4f35-b3ca-82afdc11f2b3",
          title: "Constraints – Primary Key",
          description:
            "Nessa aula, iremos entender o que são “constraints”, ou “restrições”, no banco de dados e como essas constraints podem nos ajudar na prevenção de erros e facilitar a nossa vida quando precisarmos buscar dados em tabelas.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "c9f5ead1-e0a2-4fdb-b166-426006be1eed",
          title: "Constraints – Unique, Not Null",
          description:
            "Outras constraints bastante comuns que podem ser utilizadas para evitar que um campo na tabela esteja vazio ou até mesmo para garantir que um determinado campo tenha uma informação única em toda a tabela são a “unique” e “not null”.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "fcc4743b-d0c5-47b3-92eb-38f87e459e96",
          title: "Comando Delete",
          description:
            "Até aqui já aprendemos como criar tabelas, inserir e atualizar dados. Para completar as operações básicas que podemos fazer em tabelas, iremos aprender agora o comando DELETE, que como o próprio nome sugere, é utilizado para excluir informações de tabelas.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "694b1012-cfba-4262-a03c-add82f9d6fef",
          title: "Conheça o ECMAScript",
          description:
            "O que é o ECMAScript e qual sua relação com o JavaScript? Nessa aula, Keilla irá te explicar tudo.",
          course_id: "2b7e134e-87c3-40fb-885e-2fd438c9d4ea",
        },
        {
          id: "9cea030e-e1bd-4a83-b9ce-45c339bcbcdc",
          title: "TypeScript",
          description:
            "Nessa aula iremos conhecer o TypeScript, para que serve e o que é o processo de transpilação.",
          course_id: "2b7e134e-87c3-40fb-885e-2fd438c9d4ea",
        },
        {
          id: "f43a1335-3907-4601-a352-4c35d481a246",
          title: "Ambiente de desenvolvimento",
          description:
            "Chegou a hora de configurar as ferramentas que serão utilizadas ao decorrer no curso para que possamos colocar a mão na massa. Conheça o NVM e a facilidade que ele nos traz ao disponibilizar um ambiente dinâmico de fácil alteração quando estamos trabalhando com o Node.js.",
          course_id: "2b7e134e-87c3-40fb-885e-2fd438c9d4ea",
        },
        {
          id: "c404d4c8-6bbb-429b-99f1-4c5e69717e4a",
          title: "Adicionando dependências",
          description:
            "Nessa aula veremos como podemos instalar pacotes de terceiros no nosso projeto usando o NPM e porque não é recomendado fazer o download dos arquivos de dependências sem um gerenciador de pacotes.",
          course_id: "2b7e134e-87c3-40fb-885e-2fd438c9d4ea",
        },
        {
          id: "2505fbd6-d3c5-4289-9a95-97ddcc45edf8",
          title: "Usando o site do NPM",
          description:
            "Agora que instalamos o primeiro pacote, vamos dar uma olhada no site do NPM e aprender como podemos buscar por novos pacotes que podem ser incluídos nos nossos projetos.",
          course_id: "2b7e134e-87c3-40fb-885e-2fd438c9d4ea",
        },
        {
          id: "689cd70a-8927-45ba-a08a-ff373e5495c7",
          title: "Versionamento Semântico",
          description:
            "Nessa aula iremos aprender o que é versionamento semântico e como o código do número de versão de um software é interpretado.",
          course_id: "2b7e134e-87c3-40fb-885e-2fd438c9d4ea",
        },
        {
          id: "03409e2e-b311-4a22-8834-e2960f3fda74",
          title: "Conversão de tipos",
          description:
            "Nessa aula iremos conhecer e entender os tipos de conversão de tipos do JavaScript: a implícita e a explícita.",
          course_id: "2b7e134e-87c3-40fb-885e-2fd438c9d4ea",
        },
        {
          id: "b9ce9498-3995-4fd2-966a-590d5ab1bc04",
          title: "Apresentação do curso e instrutor",
          description:
            "Seja muito bem-vindo e bem-vinda ao seu Staart em Node.js. Antes de começarmos, vamos conhecer quem é o nosso instrutor nesse curso e o que iremos aprender.",
          course_id: "23056992-cbf3-4f02-929f-fbe3e996627e",
        },
        {
          id: "4e3fb6c3-ac84-4bbe-879a-2e976f4f05de",
          title: "Entendendo o Node.js",
          description:
            "O que é o Node.js? Como ele funciona? Nessa aula Rodrigo Botti nos mostra o que essa ferramenta se propõe a resolver e para quais casos o seu uso é recomendado.",
          course_id: "23056992-cbf3-4f02-929f-fbe3e996627e",
        },
        {
          id: "886c6394-0eca-49be-8ba6-d5dd5a13372e",
          title: "Programação assíncrona com callbacks",
          description:
            "Até agora entendemos que callbacks são funções passadas para dentro de outras funções, mas como exatamente elas são executadas? E como podemos fazer o melhor uso delas? Nessa aula, Botti nos explicará tudo com exemplos práticos.",
          course_id: "23056992-cbf3-4f02-929f-fbe3e996627e",
        },
        {
          id: "5ed9f3b2-0c21-44ee-8044-0b7438da86f2",
          title: "Customizando erros com promises",
          description:
            "As mensagens de erros padrão do Node.js nem sempre são “amigáveis” e por isso, muitas vezes, é necessário tratarmos certas mensagens de erro para que sejam exibidas de uma forma mais compreensiva para quem está recebendo-a. Nessa aula iremos aprender qual a melhor forma de fazer isso.",
          course_id: "23056992-cbf3-4f02-929f-fbe3e996627e",
        },
        {
          id: "c35bcc4d-b283-4f25-8145-b88c2483758d",
          title: "Criando registrador de métricas com EventEmitters",
          description:
            "Para colocar o conhecimento em prática, nessa aula iremos construir um registrador de métricas usando EventEmitters que poderá ser utilizado por qualquer função em qualquer projeto JavaScript.",
          course_id: "23056992-cbf3-4f02-929f-fbe3e996627e",
        },
        {
          id: "0c7ff8e1-e30f-4500-9e5e-aec55c6b0990",
          title: "Apresentação do curso e instrutor",
          description:
            "Chegou a hora de dar mais um passo na sua jornada Front End! Conheça o instrutor que te guiará durante as aulas desse curso e quais temas serão abordados.",
          course_id: "ede24be4-c7f7-4190-b13a-1c178b4849c0",
        },
        {
          id: "cf79229c-bbc8-42b5-962f-a8d6bfee95f8",
          title: "Conhecendo a aplicação",
          description:
            "Nessa aula vamos conhecer a aplicação que será aprimorada durante o curso.",
          course_id: "ede24be4-c7f7-4190-b13a-1c178b4849c0",
        },
        {
          id: "8971d2e9-f73e-424a-bbf3-9065b899464e",
          title: "Manipulação da DOM",
          description:
            "Um dos principais conceitos que precisamos conhecer ao se trabalhar com Front End é o DOM. É a partir dele que podemos fazer alterações no HTML pelo JavaScript de acordo com as interações de usuários que navegam no nosso site. Nessa aula iremos entender melhor como é que isso funciona.",
          course_id: "ede24be4-c7f7-4190-b13a-1c178b4849c0",
        },
        {
          id: "dccbf234-39ae-482b-ab04-b6bc5008353c",
          title: "Transpiladores",
          description:
            "Diferente dos compiladores, os transpiladores são responsáveis por converter o código JavaScript que não seria suportado por algum navegador ou versão específica de um navegador para um código que pode ser lido por diferentes ambientes sem que haja conflito algum. Nessa aula você irá entender melhor como isso tudo funciona e porque é necessário.",
          course_id: "ede24be4-c7f7-4190-b13a-1c178b4849c0",
        },
        {
          id: "974645bc-3164-4bca-bb25-2ad4ff27bf9e",
          title: "Implementando o feed",
          description:
            "Partindo para mais uma seção da nossa aplicação, nessa aula iremos implementar o feed que irá exibir os dados que serão criados com o formulário.",
          course_id: "afc1ef67-d0fa-4f96-824d-3dd90eab1c12",
        },
        {
          id: "714fdc5e-8268-4575-9141-cbe8ec9da93b",
          title: "Adicionando posts: Evento submit",
          description:
            "Com a interface construída, nessa aula iremos adicionar comportamento no formulário por meio do JavaScript. Para isso iremos entender como o JavaScript se comunica com o HTML no React para adicionar novos elementos na interface e receber o evento de submit de formulários.",
          course_id: "afc1ef67-d0fa-4f96-824d-3dd90eab1c12",
        },
        {
          id: "eea34197-8e07-4432-b990-dc3fea975e19",
          title: "Menu de navegação",
          description:
            "Com o React Router DOM configurado, iremos adicionar um menu de navegação para que um usuário possa acessar as duas páginas da aplicação sem a necessidade de alterar a URL diretamente.",
          course_id: "afc1ef67-d0fa-4f96-824d-3dd90eab1c12",
        },
        {
          id: "dbe37ec3-6e10-4647-ba1e-e62a18081e63",
          title: "Preparando o projeto",
          description:
            "Nessa aula iremos preparar o ambiente de desenvolvimento instalando as dependências e configurando o projeto para que possamos colocar a mão na massa nas próximas aulas.",
          course_id: "74924a45-f351-456c-8667-80cdfd29249d",
        },
        {
          id: "ab554cb4-9388-4794-9ed3-3f7de8df9067",
          title: "Requisições HTTP",
          description:
            "Nessa aula entenderemos melhor o que são requisições HTTP, quais conteúdos trafegam nessas requisições e como podemos tratá-los para que possam ser exibidos de forma amigável nos nossos sites.",
          course_id: "74924a45-f351-456c-8667-80cdfd29249d",
        },
        {
          id: "71ff0377-b6d8-4978-9916-f59e7a855295",
          title: "Conectando à API",
          description:
            "Partindo de fato para a mão na massa, nessa aula veremos como conectar a API com o React e fazer as nossas primeiras requisições.",
          course_id: "74924a45-f351-456c-8667-80cdfd29249d",
        },
        {
          id: "e3a50e95-52e7-4d5b-bff0-ad4507b5854d",
          title: "Apresentação do Curso e Instrutor",
          description: "...",
          course_id: "2550c365-0d30-4405-a021-d739117064c8",
        },
        {
          id: "b9b3fc46-c656-420f-9d0a-cedfd708cf96",
          title: "Construção do topo da página",
          description: "...",
          course_id: "2550c365-0d30-4405-a021-d739117064c8",
        },
        {
          id: "11e1023e-a7ea-47d1-9307-36a230136143",
          title: "Responsividade",
          description: "...",
          course_id: "2550c365-0d30-4405-a021-d739117064c8",
        },
        {
          id: "f070fab6-663f-4613-8d56-463b4c6fbf87",
          title: "Apresentação do curso e instrutor",
          description:
            "Para começar mais uma etapa da sua jornada, iremos conhecer o instrutor e tudo que será abordado nesse curso.",
          course_id: "62a5ba54-7754-42c1-a30f-f0ae7eea5507",
        },
        {
          id: "370772b6-5271-4f24-b26b-02af17be5cdc",
          title: "Clientes HTTP",
          description:
            "Agora que estamos com a nossa API completa, vamos entender um pouco mais sobre Clientes HTTP, que nesse caso servem para que possamos testar APIs enquanto ainda estamos desenvolvendo.",
          course_id: "62a5ba54-7754-42c1-a30f-f0ae7eea5507",
        },
        {
          id: "6db24568-e212-41ba-adca-f258cda43873",
          title: "Dados: Tipos e Como Manipular",
          description:
            "Antes de realizar ações com números e palavras no nosso programa, você precisa utilizar variáveis para armazená-las. Além disso, você vai aprender a identificar qual o tipo o dado que temos e como manipulá-los.",
          course_id: "323ae098-1624-4e24-8607-1f3a04718b11",
        },
        {
          id: "037c1e7a-e13f-4c55-b925-0f4e699151b1",
          title: "Design Emocional e UX",
          description:
            "Os produtos e serviços devem ser pensados não apenas em seus aspectos funcionais, mas também nos seus efeitos emocionais. Nesta aula, vamos tratar das micro interações para aumentar o engajamento dos usuários de maneira emocional, descobrindo quais são os caráteres emocionais de acordo com Donald Norman.",
          course_id: "d1cb69bc-ad2b-4b29-abcc-d2514b0c57ed",
        },
        {
          id: "ad50cf74-f8a6-46b7-9138-3568e5f453c6",
          title: "Infinitas possibilidades",
          description:
            "Da criação de sites e gerenciamento de dados até o desenvolvimento de aplicativos para computadores e dispositivos móveis, o javascript é uma das linguagens de programação mais versáteis do mundo. Descubra os principais casos de uso e vantagens dessa incrível linguagem.",
          course_id: "23856860-f5b9-4b71-a92f-546902b8348c",
        },
        {
          id: "d2a9a4c2-d244-49c2-8165-03bd7ca4bb95",
          title: "Microsoft OneDrive",
          description:
            "Aprenda a criar, carregar e compartilhar pastas e arquivos através do Microsoft OneDrive.",
          course_id: "f37347da-7fff-41c8-b66a-68fbbc28d9c5",
        },
        {
          id: "63680091-df6a-40a9-890f-2ff4eb34492b",
          title: "Mitos e verdades",
          description:
            "Preciso ser bom em matemática, falar inglês e ser um gênio para aprender a programar? Conheça os principais mitos e verdades dentro da programação.",
          course_id: "23856860-f5b9-4b71-a92f-546902b8348c",
        },
        {
          id: "3bbf5f56-f6ad-43ae-924a-2ca499d6a1ab",
          title: "Microsoft Excel",
          description:
            "Aprenda a criar e editar planilhas, utilizar modelos, o controle de versionamento e o compartilhamento do Microsoft Excel.",
          course_id: "f37347da-7fff-41c8-b66a-68fbbc28d9c5",
        },
        {
          id: "b5002cbd-be7d-4d34-8be7-1c136dea9510",
          title: "Conhecendo o Microsoft 365",
          description:
            "Hora de pôr a mão na massa e utilizar algumas ferramentas que você vai encontrar no seu dia a dia de trabalho, como os produtos Microsoft 365.",
          course_id: "3b5792a0-d9e4-487c-ba13-275026be5efa",
        },
        {
          id: "ed2e1c1d-c280-40e7-bdbb-1103c9f24ac3",
          title: "Tipos de Operadores | Comparação e Lógico",
          description:
            "Você vai aprender a utilizar os Operadores de Comparação e os Operadores Lógicos.",
          course_id: "323ae098-1624-4e24-8607-1f3a04718b11",
        },
        {
          id: "27d10887-6f3d-45d8-aa2a-cb97dfde46f5",
          title: "Os Papéis em UX",
          description:
            "Nesta aula, Daniel Furtado conta um pouco sobre o universo de profissões que compõem a área de UX Design. Suas principais funções, habilidades esperadas, e explica por que algumas empresas possuem tantos profissionais extremamente especializados, enquanto outras possuem profissionais de UX Design com funções mais genéricas.",
          course_id: "d1cb69bc-ad2b-4b29-abcc-d2514b0c57ed",
        },
        {
          id: "d07393f1-5a63-41eb-9a0f-230201824798",
          title: "HTML na prática",
          description:
            "Agora que você já entendeu o que é HTML, chegou a hora de ver como funciona na prática. Nesta aula, Leonardo Scorza vai colocar a mão na massa e te convidar a escrever suas primeiras linhas de código.",
          course_id: "19a31b7a-1286-4927-830e-564cbcd54a23",
        },
        {
          id: "ac6d985a-9ed4-433b-bed7-fc2f16d4f733",
          title: "Microsoft PowerPoint",
          description:
            "Aprenda a criar apresentações, utilizar modelos, editar componentes dentro dos slides, criar animações e transições, gravar apresentações e a utilizar a sincronização e o compartilhamento do Microsoft PowerPoint.",
          course_id: "f37347da-7fff-41c8-b66a-68fbbc28d9c5",
        },
        {
          id: "2e7152fe-2b73-4474-a81e-d79fe16c1a32",
          title: "CSS na prática",
          description:
            "Agora que você já entendeu o que é CSS, chegou a hora de ver como funciona na prática. Nesta aula, Leonardo Scorza vai colocar a mão na e te convidar a realizar as suas primeiras estilizações.",
          course_id: "19a31b7a-1286-4927-830e-564cbcd54a23",
        },
        {
          id: "b8e2f292-7100-4877-90ac-936ed3105e27",
          title: "Inteligência Artificial",
          description:
            "Você vai entender o que é a inteligência artificial, como ela evoluiu e o que podemos esperar daqui para a frente.",
          course_id: "3b5792a0-d9e4-487c-ba13-275026be5efa",
        },
        {
          id: "033a1e3a-e2dc-4b34-9a45-5ff80dd240a6",
          title: "Criando um app a partir do Microsoft Excel",
          description:
            "Muitos conhecem as funcionalidades do Microsoft Excel para a montagem de planilhas, mas nesta aula o objetivo é mostrar como fazer um aplicativo e compartilhá-lo com sua equipe via mobile, web e Microsoft Teams.",
          course_id: "2ba9f95a-e17a-4ede-b754-0f73d36c3b42",
        },
        {
          id: "71ad569b-3ef5-4522-b52c-89a3c3a5953f",
          title: "Estrutura Lógica",
          description:
            "Você vai aprender a organizar o seu processo de negócios na criação do aplicativo, tornando seu fluxo e modificações mais alinhado com o seu objetivo primário.",
          course_id: "2ba9f95a-e17a-4ede-b754-0f73d36c3b42",
        },
        {
          id: "d0c9f672-7fc5-47b1-8956-38d3b952802a",
          title: "Oportunidades na área de dados",
          description:
            "O mercado está aquecido e deve continuar assim nos próximos anos. Esta aula apresenta fontes de vagas e motivos para a alta demanda desses profissionais atualmente.",
          course_id: "12e4c01f-a7ea-4c64-a656-8a9c7d0d3e61",
        },
        {
          id: "817c85a5-2d72-4763-8559-82b0d686c0d9",
          title: "Decisões baseadas em dados",
          description:
            "Nesta aula, seu mentor propões um desafio e apresenta um exemplo real de como é importante tomar decisões baseadas em dados.",
          course_id: "12e4c01f-a7ea-4c64-a656-8a9c7d0d3e61",
        },
        {
          id: "9a50ea08-1266-4fff-b727-639ccb2bd3c8",
          title: "Transformando dados em informações",
          description:
            "Conheça as principais etapas padronizadas, ou frameworks, que você tem que seguir para transformar dados em vantagem estratégica para você e as empresas.",
          course_id: "12e4c01f-a7ea-4c64-a656-8a9c7d0d3e61",
        },
        {
          id: "9a08ad7c-0480-4a67-a3dd-71ece10b5d5c",
          title: "Perguntas corretas",
          description:
            "Conheça métodos de estruturação de problemas e como evitar o perigo de assumir hipóteses erradas que podem enviesar suas análises.",
          course_id: "12e4c01f-a7ea-4c64-a656-8a9c7d0d3e61",
        },
        {
          id: "4394540a-542f-4c67-b290-83de19ce0199",
          title: "Revisão e Próximos Passos",
          description:
            "Aqui temos uma recapitulação de tudo que foi apresentado durante as aulas anteriores, bem como o custo de não transformar dados em vantagens estratégicas.",
          course_id: "12e4c01f-a7ea-4c64-a656-8a9c7d0d3e61",
        },
        {
          id: "91c95110-5643-4fd0-9538-64c86881130b",
          title: "HTTPS e a segurança",
          description:
            "Agora que sabemos como é o funcionamento do protocolo HTTP, iremos entender como é a sua camada de segurança e como essa camada se integra ao HTTP dando origem ao HTTPS. Essa camada é muito importante já que, sem ela, os pacotes TCP enviados entre cliente e servidor podem ser interceptados por outra pessoa que pode acabar usando isso de forma maliciosa.",
          course_id: "468dbdd9-66bf-48ed-91fa-3dfdec5fba4e",
        },
        {
          id: "0a011402-1dd9-4c32-89cb-530a1a14ca2e",
          title: "Saída para a internet",
          description:
            "Nessa aula iremos conhecer um pouco mais sobre duas camadas do modelo OSI: a camada de Enlace e a camada Física. Veremos também como elas funcionam em conjunto com as demais camadas estudadas até aqui e porque elas também são tão importantes.",
          course_id: "468dbdd9-66bf-48ed-91fa-3dfdec5fba4e",
        },
        {
          id: "11964838-0e2d-4b22-96d4-6378e0af2518",
          title: "Criação de página no navegador",
          description:
            "Agora que sabemos qual é o caminho que uma requisição percorre pela internet quando o endereço de um site é digitado no navegador até a resposta chegar de volta na máquina que fez a solicitação, chegou o momento de entendermos como o navegador monta toda a estrutura HTML de uma página recebida no navegador, junto com seus arquivos de estilo e código JavaScript.",
          course_id: "468dbdd9-66bf-48ed-91fa-3dfdec5fba4e",
        },
        {
          id: "52702a5d-ff18-49ca-8b16-00fabad18861",
          title: "Operação de Arrays Usando Callbacks",
          description:
            "Nessa aula iremos aprender como funcionam os métodos embutidos de arrays, o que fazem, como podemos utilizar esses métodos, quais parâmetros recebem e o que retornam.",
          course_id: "a69ee6be-b292-4cb9-a9a5-36481689a800",
        },
        {
          id: "5e566e46-ea20-453a-9e1a-b31398e07dd1",
          title: "Filas e Deques",
          description:
            'Nessa aula iremos entender a fundo e na prática como é o funcionamento de listas e porque essa estrutura é conhecida pelo princípio "FIFO - First In First Out".',
          course_id: "a69ee6be-b292-4cb9-a9a5-36481689a800",
        },
        {
          id: "717bb0b4-f0ff-4feb-ba41-06bcd757fc5e",
          title: "Conjuntos (Sets)",
          description:
            "Nessa aula vamos aprender sobre conjuntos e quais os seus casos de uso na programação.",
          course_id: "a69ee6be-b292-4cb9-a9a5-36481689a800",
        },
        {
          id: "fc3ee93f-66c4-4083-b6a6-00693224a471",
          title: "Dicionários (Maps)",
          description:
            "Agora que entendemos sobre conjuntos, chegou a hora de conhecermos outra estrutura que é o dicionário.",
          course_id: "a69ee6be-b292-4cb9-a9a5-36481689a800",
        },
        {
          id: "f61e43c7-4e90-456b-85b8-bf935fc9dd95",
          title: "Introdução a Estruturas Avançadas",
          description:
            "Agora que você aprendeu sobre as principais estruturas de dados, chegou a hora de conhecer outras estruturas de dados mais avançadas para que você possa sentir o gostinho de tudo que ainda pode ser aprendido.",
          course_id: "a69ee6be-b292-4cb9-a9a5-36481689a800",
        },
        {
          id: "6adb6807-7794-4b4c-8b55-d8d79cceb06a",
          title: "Os 8 elementos",
          description:
            "Nesta aula, Pollyanna Gonçalves vai introduzir os 8 elementos que compõem o pensamento humano. Entenda, em detalhes, do que se trata e como lidar com cada elemento no seu dia a dia.",
          course_id: "8aabd52a-9de6-460d-ae89-7bab57ab9b27",
        },
        {
          id: "ad7503f5-1bfe-4710-b24c-c0ad72001904",
          title: "Outros tipos de vieses",
          description:
            "Para fechar a lista de vieses e deixá-lo 100% preparado para evitar todos eles, nesta aula, Pollyanna Gonçalves irá abordar mais alguns vieses relevantes para formação do pensamento analítico.",
          course_id: "8aabd52a-9de6-460d-ae89-7bab57ab9b27",
        },
        {
          id: "3a571ac2-c3a4-4b37-9c9b-7635ba03c956",
          title: "Nível de maturidade",
          description: "...",
          course_id: "310b41eb-f40c-4d0e-a0c9-311f2d67c7dc",
        },
        {
          id: "1041538f-2465-445f-9dc8-5acedd11d679",
          title: "Quem é o usuário?",
          description: "...",
          course_id: "310b41eb-f40c-4d0e-a0c9-311f2d67c7dc",
        },
        {
          id: "00ea9671-5fa1-4621-b12d-19fe3af3a634",
          title: "Prototipação Primordial",
          description: "...",
          course_id: "310b41eb-f40c-4d0e-a0c9-311f2d67c7dc",
        },
        {
          id: "a54e6b1f-c63f-440f-8d4f-d3a9d6365957",
          title: "O impacto da interface",
          description: "...",
          course_id: "310b41eb-f40c-4d0e-a0c9-311f2d67c7dc",
        },
        {
          id: "ad1e8884-8e27-47d9-9a8c-b4fbf67ceb0a",
          title: "Elementos de Linha",
          description:
            "Aprenda sobre os elementos de linha (inline) que são elementos que aparecerem na mesma linha que outros elementos e ocupam somente o espaço necessário ao invés de toda a horizontal disponível na página.",
          course_id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
        },
        {
          id: "b6a045a7-32f3-423b-8225-516f1db1b04a",
          title: "Atributos do HTML",
          description:
            "Nesta aula você vai aprender sobre como e quando utilizar atributos. Os atributos podem ser categorizados em atributos Globais e Específicos. Os atributos Globais são comuns a todos elementos HTML, já os atributos Específicos, possuem utilidade apenas em determinados elementos.",
          course_id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
        },
        {
          id: "4678aa06-3c1e-4e01-8695-3e21ea134cab",
          title: "O Que é CSS?",
          description:
            "Nessa aula você vai iniciar a estilização sua página Web utilizando o CSS.",
          course_id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
        },
        {
          id: "7dcb9d7b-e05a-418a-89eb-6dfe3b0885a0",
          title: "Animações",
          description:
            "As animações são elementos chave da experiência e encantamento do usuário. \nO seu desafio ao término da a aula será criar uma animação que seja adequada ao contexto do projeto e que demonstre que você aprendeu como utilizar os keyframes. Se divirta!",
          course_id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
        },
        {
          id: "683fb151-b10c-45e7-9eb4-59b6f4aa0b9d",
          title: "Próximos Passos para o seu Staart",
          description:
            "Chegou a hora de revisar tudo o que aprendemos. Lembre-se que todas essas profissões serão abordadas aqui na Staart, então aproveite para consumir todos os conteúdos que possam se relacionar com o papel que mais funciona para você. Bons estudos!",
          course_id: "fc436ab1-50d9-4523-bc11-734bd2893f32",
        },
        {
          id: "31de38b0-06d4-4f3e-b902-63bd8b2f2a77",
          title: "Mitos e Verdades",
          description: "...",
          course_id: "0636249f-b631-4804-8767-7e721a5271b0",
        },
        {
          id: "9a9858e7-6835-472b-ade8-ec9c56e97ee1",
          title: "Mão na Massa",
          description:
            "Conheça a ferramenta que vamos utilizar para executar nossos primeiros comandos.",
          course_id: "323ae098-1624-4e24-8607-1f3a04718b11",
        },
        {
          id: "d4d72976-965d-4670-87f4-4bbf56ba7725",
          title: "Ponto de partida",
          description:
            "Conheça seu professor Erick Wendel, Microsoft MVP, Google Dev Expert, comunicador e especialista em performance.  Aqui você dará os primeiros passos na compreensão do back end e suas aplicações.",
          course_id: "23856860-f5b9-4b71-a92f-546902b8348c",
        },
        {
          id: "40778009-7da5-41dc-b6d8-566b83ee0ca4",
          title: "Projeto: Aplicando CSS no topo",
          description:
            "Neste passo, seu desafio será iniciar a estilização do projeto, começando pela parte superior do site.",
          course_id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
        },
        {
          id: "2b85c230-0900-4f33-9544-148b88c09ad4",
          title: "Projeto: Aplicando CSS na seção Formação e Habilidades",
          description:
            "Siga personalizando o seu site, agora nas seções de formação e habilidades.",
          course_id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
        },
        {
          id: "77a41950-d162-428a-81d9-2ee9b660fac5",
          title: "Editores de texto vs IDEs",
          description:
            "Nessa aula iremos entender qual a diferença entre editores de texto e IDEs, além de, claro, o que são IDEs e porque eles existem.",
          course_id: "1a99deef-b707-4431-ae13-22a82c9b94eb",
        },
        {
          id: "51ca30d0-4658-432c-9a41-80a22ceb9cc8",
          title: "Instalação do WSL",
          description:
            "Agora que temos o sistema operacional escolhido pelo instrutor, chegou a hora de instalar o WSL dentro do Windows. Faremos essa configuração para que, independentemente do seu sistema operacional, seja o Windows, alguma distribuição do Linux ou o macOS, você possa acompanhar as próximas aulas e cursos usando sempre os mesmos comandos mostrados nas aulas sem erros de incompatibilidade de diferentes sistemas.",
          course_id: "1a99deef-b707-4431-ae13-22a82c9b94eb",
        },
        {
          id: "1861eb85-0024-4954-af88-1ddc35d198d9",
          title: "Terminal do WSL integrado no VS Code",
          description:
            "Nessa aula iremos integrar o VS Code que já instalamos e configuramos anteriormente para que use o terminal do WSL em vez do terminal padrão do Windows. Se você está usando o Linux ou macOS, não precisará realizar os passos dessa aula, mas é importante que você acompanhe o conteúdo para garantir que não vai perder nada.",
          course_id: "1a99deef-b707-4431-ae13-22a82c9b94eb",
        },
        {
          id: "dc2779d3-a33c-4dc2-b444-fc8cd4d836c3",
          title: "O que aprendemos",
          description:
            "Parabéns por ter chegado até aqui! Nessa aula vamos recapitular os principais pontos de aprendizado adquiridos durante o curso.",
          course_id: "1a99deef-b707-4431-ae13-22a82c9b94eb",
        },
        {
          id: "c09a72bb-d0fd-4c67-af4d-f3384efab0da",
          title: "Trabalhando com o Git",
          description:
            "Nessa aula iremos conhecer alguns dos principais comandos para se trabalhar com o Git e como manter nossos projetos sempre sincronizados com as versões que estão no GitHub.",
          course_id: "5286cb1e-96d7-4504-a66b-430262244dc8",
        },
        {
          id: "ba6c79d6-52f6-456f-9e9d-fc7763c63510",
          title: "Estratégias de merge",
          description:
            "Nessa aula iremos conhecer as diferentes maneiras de fazer o merge de um branch na branch principal e as diferentes situações que podem existir antes disso ser feito.",
          course_id: "5286cb1e-96d7-4504-a66b-430262244dc8",
        },
        {
          id: "e55f8501-fb54-4676-84b9-2780bac67878",
          title: "Open source",
          description:
            "Para fechar com chave de ouro, nessa aula veremos como grandes projetos open source são cuidados pela comunidade e como desenvolvedores e desenvolvedoras do mundo todo aplicam tudo que vimos neste curso.",
          course_id: "5286cb1e-96d7-4504-a66b-430262244dc8",
        },
        {
          id: "bf0793ac-cb1d-4849-a6c6-fb936d798491",
          title: "Instalando o MySQL",
          description:
            "Nessa aula iremos instalar e configurar o SGBD que será utilizado durante todo o curso para criação, gerenciamento e exclusão de banco de dados: o MySQL.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "ec89ff86-2aac-4e03-b65b-f2c5effefd96",
          title: "Comando Insert",
          description:
            "Com as tabelas já criadas e constraints definidas, agora vamos conhecer um comando que será bastante utilizado daqui para frente: o INSERT. Esse é o comando responsável por inserir novos dados em uma tabela no banco de dados.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "03d4d623-db89-47b0-bb18-07d9dbfc210a",
          title: "Comando Update",
          description:
            "E se alguma informação for inserida errada no banco, como podemos atualizá-la? Nessa aula, iremos conhecer o comando UPDATE.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "137d4ce6-7cfd-441c-84e2-f6f7826400b3",
          title: "Comando Alter Table",
          description:
            "Já aprendemos o básico de como manipular dados nas tabelas. Agora iremos aprender como manipular as próprias tabelas e suas colunas.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "b9e58937-f4e8-47f3-b5f7-cf3ac0992ab1",
          title: "Mais alguns operadores",
          description:
            "Complementando o conteúdo da aula anterior, iremos aprender nessa aula, mais alguns operadores que serão muito úteis no nosso dia a dia.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "28685aaf-32ad-4f37-80ab-915341d24d6f",
          title: "Relacionamento entre tabelas",
          description:
            "Nessa aula veremos o que é o relacionamento entre tabelas, quais tipos existem e porque faz tanto sentido em utilizá-los.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "1d0f278a-c4c3-4fb5-bd9d-704e6d45dbea",
          title: "Relacionamento 1-n e n-n",
          description:
            "Vamos entender nessa aula como criar relacionamentos 1-n e n-n (1 para muitos e muitos para muitos) e assim, teremos passado por todos os tipos de relacionamento em um banco de dados.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "ddf9a9fa-d579-487c-9965-f3eeabe4e2f9",
          title: "SQL Join - Right e Full Outer",
          description:
            "Para completar os tipos de consultas com Join, nessa aula iremos aplicar o Right Join e um outro tipo que não é suportado pelo banco, mas é possível criá-lo manualmente: o Full Outer Join.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "6228e14a-b9dd-4aa2-b596-b5ac02a9d6eb",
          title: "Funções de agregação",
          description:
            "Nessa aula iremos conhecer as funções de agregação. Basicamente são funções prontas que o banco de dados disponibiliza para que possamos realizar cálculos aritméticos em um conjunto de valores.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "7d4f1e68-834e-493c-b84d-76de6c11bd5a",
          title: "SQL Order By",
          description:
            "O Order By é utilizado para ordenar dados de tabelas. Nessa aula Daniele nos mostra, na prática, como essa ferramenta funciona.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "a8bb9373-8f95-4001-bb32-db6f8bce5af2",
          title: "Comando Select avançado",
          description:
            "Agora que já passamos por todos os comandos e operadores do banco de dados, nessa aula iremos aprender como tirar mais proveito do comando SELECT + JOIN, onde realizaremos a junção de mais de duas tabelas para trazer dados com filtros mais avançados em conjunto com um novo comando: o Group By.",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
        },
        {
          id: "9f2d2c45-5659-41ec-b997-0408ce9974d5",
          title: "Importando bibliotecas e funções",
          description:
            "Até agora aprendemos como instalar pacotes de terceiros mas ainda não fizemos nenhum uso de suas funcionalidades. Nessa aula vamos entender como podemos realizar a importação dessas funcionalidades e também como podemos fazer isso no nosso próprio código afim de separar um projeto em arquivos diferentes de acordo com sua responsabilidade.",
          course_id: "2b7e134e-87c3-40fb-885e-2fd438c9d4ea",
        },
        {
          id: "c24c22d2-152b-41bc-b3d2-608a135f4e9f",
          title: "Operadores de comparação",
          description:
            "Nessa aula iremos entender melhor como funciona o operador de comparação e os dois modos de utilizá-lo.",
          course_id: "2b7e134e-87c3-40fb-885e-2fd438c9d4ea",
        },
        {
          id: "1cf85f67-6399-499e-becc-0339de082a52",
          title: "Interpolação de Strings",
          description:
            "Nessa aula veremos como usar os templates literais para interpolar strings, isto é, inserir valores de variáveis no início, meio ou fim de strings.",
          course_id: "2b7e134e-87c3-40fb-885e-2fd438c9d4ea",
        },
        {
          id: "07027ff7-d64d-4c71-a9f8-8fd1f8793fed",
          title: "Tratamento de erros e exceções",
          description:
            "Tratamento de erros e exceções de uma aplicação é uma das coisas mais importantes em um software. É isso que irá definir o quão resistente a falhas um sistema será. \nMas como isso tudo funciona na prática? Veremos isso nessa aula.",
          course_id: "2b7e134e-87c3-40fb-885e-2fd438c9d4ea",
        },
        {
          id: "eea6a183-794d-4ff1-8217-cbc85ae3a4cd",
          title: "Tratamento de erro com callbacks",
          description:
            "Agora que já estamos com os callbacks em funcionamento, precisamos aprimorar o comportamento do código em caso de erro.",
          course_id: "23056992-cbf3-4f02-929f-fbe3e996627e",
        },
        {
          id: "ad9afe4b-d04d-47dd-a0cd-2576806ee68d",
          title: "Transformando callbacks em promises",
          description:
            "Agora que sabemos como promises funcionam, não queremos mais voltar a utilizar callbacks a menos que seja necessário, não é mesmo? Então como podemos converter callbacks que já são utilizadas no em um projeto em promises para que possamos ter uma melhor experiência na construção e manutenção do código?",
          course_id: "23056992-cbf3-4f02-929f-fbe3e996627e",
        },
        {
          id: "d534cae8-f2da-4cb5-a4f8-6fc12cf50060",
          title: "Programação assíncrona com async/await",
          description:
            "A forma mais utilizada de se trabalhar com promises é utilizando a estrutura Async/Await. Essa estrutura nos permite trabalhar com o código de uma forma mais linear, onde a execução e retorno de promises ficam num mesmo nível, sem precisarmos utilizar o “.then()” ou o “.catch()”. Vamos aprender, nessa aula, como trabalhar com essa estrutura.",
          course_id: "23056992-cbf3-4f02-929f-fbe3e996627e",
        },
        {
          id: "0355cece-1ff1-406c-9f1d-d85240dd140c",
          title: "Tratamento de erros com EventEmitters",
          description:
            "Nessa aula iremos fazer o tratamento de erros usando EventEmitters assim como fizemos para callbacks e promises nas aulas anteriores.",
          course_id: "23056992-cbf3-4f02-929f-fbe3e996627e",
        },
        {
          id: "b5a9eda4-0674-4b04-9ece-576f18b66c03",
          title: "Usando o registrador de métricas",
          description:
            "Agora que temos o registrador de métricas construído, chegou a hora de colocarmos ele em ação para vermos o poder do EventEmitter e quanta coisa legal pode ser criada com ele.",
          course_id: "23056992-cbf3-4f02-929f-fbe3e996627e",
        },
        {
          id: "a28f7aa6-1856-4b51-92dc-b0d432df0e6a",
          title: "Conclusão",
          description:
            "Quanta coisa nova aprendida, não é mesmo? Receba os parabéns do instrutor Rodrigo Botti e faça um recap de tudo que foi ministrado nesse curso até aqui.",
          course_id: "23056992-cbf3-4f02-929f-fbe3e996627e",
        },
        {
          id: "e71b30ff-0900-4260-8c29-a3624ff2a445",
          title: "Eventos",
          description:
            "Eventos é a maneira como o JavaScript consegue informar para outras partes do código sobre acontecimentos que a nossa aplicação está aguardando que aconteça. Com isso é possível saber quando um botão foi clicado, quando uma página carregou, entre muitos outros exemplos. Nessa aula iremos entender melhor como podemos tirar proveito dessa feature do JavaScript para aprimorar nossas aplicações.",
          course_id: "ede24be4-c7f7-4190-b13a-1c178b4849c0",
        },
        {
          id: "25060cf9-f404-4047-ab2d-6eff960a76a2",
          title: "Module Bundling",
          description:
            "Nessa aula iremos entender melhor o papel que compiladores podem exercer em um projeto e como isso vai deixar a nossa aplicação mais preparada para o ambiente de produção.",
          course_id: "ede24be4-c7f7-4190-b13a-1c178b4849c0",
        },
        {
          id: "4ef97006-7c71-4b64-bfd6-aa08a88dce09",
          title: "Apresentação do curso e instrutor",
          description:
            "Seja bem-vindo e bem-vinda ao curso de fundamentos do React. Conheça o instrutor e os tópicos que serão abordados durante o curso.",
          course_id: "afc1ef67-d0fa-4f96-824d-3dd90eab1c12",
        },
        {
          id: "ca8df4e2-28ab-48fd-9b0b-730027d77215",
          title: "Sobre o React",
          description:
            "Nessa aula entenderemos um pouco do que exatamente é o React antes de partirmos para a prática.",
          course_id: "afc1ef67-d0fa-4f96-824d-3dd90eab1c12",
        },
        {
          id: "ea33c52e-3a50-4bbb-992a-563ba9444679",
          title: "Configurações iniciais",
          description:
            "Agora que entendemos um pouco o que de fato é o React, iremos começar colocar a mão na massa realizando as configurações iniciais do projeto.",
          course_id: "afc1ef67-d0fa-4f96-824d-3dd90eab1c12",
        },
        {
          id: "caf1aea3-6205-4457-839e-654d3c53a221",
          title: "Componentizando o formulário",
          description:
            "Nessa aula iremos aplicar os conceitos aprendidos até aqui para componentizar o formulário, isto é, isolar a parte do código que pertence ao formulário para manter o padrão e a estrutura do nosso projeto. Aqui iremos aprender como trabalhar com callbacks no React para resolver um problema específico.",
          course_id: "afc1ef67-d0fa-4f96-824d-3dd90eab1c12",
        },
        {
          id: "d5a52e00-c90e-4150-abc0-25149e53b9b3",
          title: "Preflight",
          description:
            "Requisições do tipo preflight acontecem quando solicitamos algum recurso do Back End que pode gerar uma alteração irreversível como apagar um dado, por exemplo. Nessa aula iremos entender melhor como isso acontece.",
          course_id: "74924a45-f351-456c-8667-80cdfd29249d",
        },
        {
          id: "f814cff8-ac86-4a97-b417-fa8a4f4d94f6",
          title: "Conclusão",
          description:
            "Parabéns por ter concluído mais uma etapa da sua jornada! Vamos recapitular o que aprendemos?",
          course_id: "74924a45-f351-456c-8667-80cdfd29249d",
        },
        {
          id: "6b3c69d6-929d-4d71-acbd-4b70cadf9411",
          title: "Ambiente de desenvolvimento e design",
          description:
            "Para salvar o seu código no codesandbox você pode pressionar as 2 seguintes teclas juntas: Control + S (caso esteja no windows ou linux) ou Command + S (caso esteja no mac).",
          course_id: "2550c365-0d30-4405-a021-d739117064c8",
        },
        {
          id: "20607fa5-56b8-413c-aa48-331cb4aeafac",
          title: "Seção principal",
          description: "...",
          course_id: "2550c365-0d30-4405-a021-d739117064c8",
        },
        {
          id: "bf31522e-ac5c-49cf-b221-92b89e2ef630",
          title: "Seção de projetos",
          description: "...",
          course_id: "2550c365-0d30-4405-a021-d739117064c8",
        },
        {
          id: "9e59b176-242c-4a88-b38d-2ecd84d8377a",
          title: "Ajustes finais",
          description: "...",
          course_id: "2550c365-0d30-4405-a021-d739117064c8",
        },
        {
          id: "0c00e7b0-d849-47ff-8df2-e6346cfb425e",
          title: "Conclusão",
          description: "...",
          course_id: "2550c365-0d30-4405-a021-d739117064c8",
        },
        {
          id: "479720fd-d7d7-4dc9-8d7d-40bb539ee116",
          title: "Construindo API com Express",
          description:
            "Agora que sabemos como funciona o módulo http do Node.js que inclusive criamos uma API apenas com ele, nessa aula vamos conhecer o Express que é um framework muito utilizado por vários projetos para a construção de APIs. A diferença entre ele e o módulo http nativo do Node.js é que, com o Express, muita coisa já vem pronta e precisamos nos preocupar apenas com o código principal da aplicação.",
          course_id: "62a5ba54-7754-42c1-a30f-f0ae7eea5507",
        },
        {
          id: "74aa1479-2785-44d6-8651-e4f5bc405ff0",
          title: "Dia 1 Quick Staart",
          description:
            "É hora de entendermos o problema, suas possíveis soluções e começar os estudos em HTML e CSS. Além de trazer conceitos fundamentais como marcação, tags e estilo, essa aula também mostra como podemos ver que essas tecnologias estão presentes no nosso dia-a-dia e apresenta as ferramentas utilizadas nesta semana Quick Staart!",
          course_id: "53cf1b57-cd2d-4fef-8e2a-75a04faab3e8",
        },
        {
          id: "5dff76eb-5f1d-4fa1-a1bd-06f6923d7138",
          title: "Apresentação do Instrutor",
          description:
            "Lucas Santos é um grande fã da linguagem javascript, tem mais de 10 anos de experiência na área de tecnologia, e hoje trabalha na Suécia. Neste curso ele te guiará na implementação de autenticação e autorização em backend nodejs.",
          course_id: "5db4e1ed-de03-4903-9c75-5dcea0c37699",
        },
        {
          id: "f3b17215-6570-4150-ba5a-4eb5cb084234",
          title: "Preparando o terreno para usarmos autenticação",
          description:
            "Nesta aula você aprenderá como serão armazenados os dados de usuário na aplicação antes de começar o tratamento da camada de segurança mais avançada.",
          course_id: "5db4e1ed-de03-4903-9c75-5dcea0c37699",
        },
        {
          id: "2d712a1a-e70d-4931-87a3-58d8427c781e",
          title: "Autenticação versus Autorização",
          description:
            "Nesta aula você aprenderá as diferenças entre o conceito de autenticação e autorização.",
          course_id: "5db4e1ed-de03-4903-9c75-5dcea0c37699",
        },
        {
          id: "980db3fa-46d0-4b28-9d6c-8c99829a8bce",
          title: "Tipos de autenticação",
          description:
            "Nesta aula o instrutor explica sobre os tipos de autenticação existentes, em especial detalha a autenticação basic.",
          course_id: "5db4e1ed-de03-4903-9c75-5dcea0c37699",
        },
        {
          id: "145996c5-7fff-46fc-a147-fed1e23e82cd",
          title: "Implementando seu middleware com Basic Auth",
          description:
            "É chegado o momento no qual finalmente implementaremos a autenticação Basic Auth dentro de um middleware no nosso projeto.",
          course_id: "5db4e1ed-de03-4903-9c75-5dcea0c37699",
        },
        {
          id: "0d508f94-1b09-4781-8ba9-2ce421206972",
          title: "Hello, JWT!",
          description:
            'Existem outros tipos de autenticação além da "basic auth", e nesta aula o instrutor vai te explicar sobre um tipo chamado "bearer", que utiliza tokens de usuário. Em especial exploraremos um dos modelos mais utilizado no mercado conhecido como JWT.',
          course_id: "5db4e1ed-de03-4903-9c75-5dcea0c37699",
        },
        {
          id: "5fc8bc5c-b870-4f26-8384-98e36aeefc1b",
          title: "Implementando sua autenticação usando JWT",
          description:
            "Partiremos agora para a implementação da autenticação JWT no nosso projeto.",
          course_id: "5db4e1ed-de03-4903-9c75-5dcea0c37699",
        },
        {
          id: "9bccfffd-d39b-4ca4-8258-302f7b59c996",
          title: "Utilizando o express-jwt",
          description:
            'Nesta aula a biblioteca "express-jwt" será apresentada como um facilitador da implementação de mecanismos de autenticação JWT.',
          course_id: "5db4e1ed-de03-4903-9c75-5dcea0c37699",
        },
        {
          id: "94eb2314-bee4-4be7-b0bb-ae5e70fafb10",
          title: "Primeiros passos com Autorizações",
          description:
            "Nesta aula o instrutor explicara conceitos básicos de autorização, que é o mecanismo responsável por controlar o permissionamento do usuário para executar determinada ação.",
          course_id: "5db4e1ed-de03-4903-9c75-5dcea0c37699",
        },
        {
          id: "4800ccf0-efc1-40ac-b15c-1d0a54d3d15e",
          title: "Resumão e próximos passos",
          description:
            "Nesta última aula o instrutor deixa alguns desafios adicionais para você evoluir o seu projeto, e assim aplicar tudo que foi ensinado neste curso.",
          course_id: "5db4e1ed-de03-4903-9c75-5dcea0c37699",
        },
        {
          id: "d6dc0749-2693-4cee-bdea-9b668513fe02",
          title: "Apresentação do Instrutor e do curso",
          description:
            'Vitor Alencar atua há mais de uma década como engenheiro de software frontend, e se \nespecializou na biblioteca "React", desenvolvida e mantida pela Meta (antiga Facebook). Hoje\nVitor mora na Europa, e lidera uma equipe incrível dentro da Tax Fix, uma empresa Alemã.\nNeste curso o instrutor tem como objetivo principal construir um frontend com "React" \nimplementado autenticação.',
          course_id: "e1ce993a-e3c7-458b-bc1f-3dfd5070fcfc",
        },
        {
          id: "80f5a5c8-9e26-40d5-b443-e49df844d814",
          title: "Configurando o Firebase",
          description:
            "Nesta aula você aprenderá a fazer uma configuração inicial do Google Firebase para \ndefinir um serviço de autenticação que será importado em uma aplicação React.",
          course_id: "e1ce993a-e3c7-458b-bc1f-3dfd5070fcfc",
        },
        {
          id: "230e6124-3b30-4420-a137-cdee0384e234",
          title:
            "Primeiros passos para autenticação com React.js – Primeiro componente",
          description:
            'Nesta aula o instrutor começa a desenvolver a aplicação e cria o primeiro componente de \ncadastro de usuários utilizando gestão de estados com os famosos "React Hooks"',
          course_id: "e1ce993a-e3c7-458b-bc1f-3dfd5070fcfc",
        },
        {
          id: "7f31553f-768f-40fa-b010-4b33e223af0b",
          title: "Criando contexto na sua aplicação React.js",
          description:
            "Nesta aula você será capaz de criar um contexto na sua aplicação para que seja possível integrá-la ao componente principal de SignUp.",
          course_id: "e1ce993a-e3c7-458b-bc1f-3dfd5070fcfc",
        },
        {
          id: "c7511cce-0f2d-47ee-b56f-02647e75284c",
          title: "Fazendo sua aplicação interagir com o Firebase",
          description:
            "Nesta aula será concluída a integração entre o React e o Firebase, e os usuários já passarão a ser registrados no sistema da Google.",
          course_id: "e1ce993a-e3c7-458b-bc1f-3dfd5070fcfc",
        },
        {
          id: "26b7f12b-ea50-47be-a6c9-e09697f9a5d3",
          title: "Criando rotas e compartilhando contexto",
          description:
            "Nesta aula novas páginas serão criadas como a de perfil do usuário, e o contexto do \nusuário será compartilhado entre as rotas da aplicação.",
          course_id: "e1ce993a-e3c7-458b-bc1f-3dfd5070fcfc",
        },
        {
          id: "10aa3ec8-da32-4c1c-8656-e069ef2c1e80",
          title: "Criando a rota de Login e conectando com Firebase",
          description:
            "Nesta aula você criará a tela de login e integrará a autenticação com o Firebase.",
          course_id: "e1ce993a-e3c7-458b-bc1f-3dfd5070fcfc",
        },
        {
          id: "96aa462a-55a7-41e7-bc15-f33bfe5b490c",
          title: "Página de perfil do usuário",
          description:
            "Nesta aula você será capaz de interpretar o contexto de um usuário autenticado dentro \nda rota de perfil de usuário através de uma variável que representa o seu estado.",
          course_id: "e1ce993a-e3c7-458b-bc1f-3dfd5070fcfc",
        },
        {
          id: "ec81cbf4-7d94-4b18-8e3a-ff89ee6fcc41",
          title: "Atualizando o perfil do usuário",
          description:
            "Nesta aula você construirá a página de atualização de informações do usuário.",
          course_id: "e1ce993a-e3c7-458b-bc1f-3dfd5070fcfc",
        },
        {
          id: "8579b6b3-0238-49a1-b3c0-54b70e224dda",
          title: "Recuperando a senha do usuário",
          description:
            "Nesta aula você construirá a página de recuperação de senha do usuário.",
          course_id: "e1ce993a-e3c7-458b-bc1f-3dfd5070fcfc",
        },
        {
          id: "3c7d9768-9f72-4245-8d06-1f8b6d90876f",
          title: "Rotas privadas e toques finais",
          description:
            "Com a aplicação quase pronta chegou a hora de fechar algumas rotas logadas que estão \npúblicas, tornando-as privada.",
          course_id: "e1ce993a-e3c7-458b-bc1f-3dfd5070fcfc",
        },
        {
          id: "b7f54998-41eb-443b-a042-61b560e769b6",
          title: "Considerações Finais",
          description:
            'Chegamos ao final de mais um curso da "Staart", e o instrutor Vitor te deixa com um desafio de estilizar toda essa aplicação para deixá-la com a sua cara.',
          course_id: "e1ce993a-e3c7-458b-bc1f-3dfd5070fcfc",
        },
        {
          id: "b3db8da4-3627-4cbc-9fe6-14bb021ef7f4",
          title: "Apresentação do curso e Instrutor",
          description:
            "Seja bem-vindo ao seu staart em deploy de aplicações com React​. Nessa aula, o instrutor se apresenta e nos mostra o que iremos aprender ao longo das próximas aulas.",
          course_id: "7cfc5e1c-49c4-4812-8c7a-6826141d3ee0",
        },
        {
          id: "54084b4e-dbd8-4f06-a566-2f3babc0aad1",
          title: "Buildando sua aplicação React.js",
          description:
            'Nessa aula iremos entender como o React gera o "bundle" otimizado de uma aplicação para que seja possível enviarmos o código para produção.',
          course_id: "7cfc5e1c-49c4-4812-8c7a-6826141d3ee0",
        },
        {
          id: "e32da105-1770-4599-9afb-8f5fae201179",
          title: "Instalando o CLI da Vercel",
          description:
            "Nessa aula iremos instalar a ferramenta que utilizaremos para se conectar com o serviço da Vercel para que possamos enviar os arquivos do nosso projeto para a nuvem.",
          course_id: "7cfc5e1c-49c4-4812-8c7a-6826141d3ee0",
        },
        {
          id: "141e1728-0881-4874-a62b-b6f1443d1d90",
          title: "Configurando e enviando o projeto para nuvem",
          description:
            "Nessa aula iremos finalmente enviar o projeto para o serviço da Vercel e assim disponibilizarmos a aplicação publicamente por meio da URL.",
          course_id: "7cfc5e1c-49c4-4812-8c7a-6826141d3ee0",
        },
        {
          id: "06beca22-bb5c-4039-a1ca-8b01fb926d79",
          title: "Criando ambientes para a sua aplicação",
          description:
            "Nessa aula vamos entender como podemos separar a nossa aplicação em diferentes ambientes: Ambiente de desenvolvimento ou Ambiente de produção. Assim garantimos que as atualizações enviadas para um projeto possam ser testadas antes de serem liberadas para o público geral.",
          course_id: "7cfc5e1c-49c4-4812-8c7a-6826141d3ee0",
        },
        {
          id: "4e99d57d-6a06-452c-817c-1cff5a70935d",
          title: "Automatizando o processo de deploy",
          description:
            "A forma como fazemos deploy até aqui é bem manual, não é mesmo?\nE se, de alguma forma, pudéssemos automatizar esse processo? É exatamente isso que vamos aprender e fazer nessa aula.",
          course_id: "7cfc5e1c-49c4-4812-8c7a-6826141d3ee0",
        },
        {
          id: "e08087e9-aa39-4f11-9230-9c280cce95c8",
          title: "Encerramento",
          description:
            "Nessa aula final iremos fazer um recap por tudo que aprendemos durante esse curso. E quanta coisa aprendida, não?",
          course_id: "7cfc5e1c-49c4-4812-8c7a-6826141d3ee0",
        },
        {
          id: "5d308635-d99c-4b2d-9057-167d5f6a4157",
          title: "Apresentação do curso e Instrutor",
          description:
            "Nessa aula, conheça melhor quem será o seu instrutor durante o curso e os principais pontos que serão abordados nas próximas aulas.",
          course_id: "2856a92f-c747-45a9-b14d-64bbd8fb5f8a",
        },
        {
          id: "7bf69fab-749f-41fe-9241-cb35e3b712a5",
          title: "Preparando a aplicação",
          description:
            "Nessa aula iremos preparar a nossa aplicação para o deploy. Isso envolve modificar o código atual para que possamos remover informações sensíveis que podem ficar expostas no repositório do GitHub.",
          course_id: "2856a92f-c747-45a9-b14d-64bbd8fb5f8a",
        },
        {
          id: "9895c90f-ecd2-4fa7-b0a7-7ce48eeaadb6",
          title: "Primeiro deploy",
          description:
            "Com a aplicação preparada, nessa aula iremos realizar o primeiro deploy da aplicação na plataforma Heroku.",
          course_id: "2856a92f-c747-45a9-b14d-64bbd8fb5f8a",
        },
        {
          id: "4bf2b23e-66fe-4d93-aac6-d9dd694341f4",
          title: "Subindo o Banco de Dados",
          description:
            "Com a aplicação no ar, agora precisamos configurar o banco de dados para que também funcione fora da nossa máquina e é exatamente isso que faremos nessa aula.",
          course_id: "2856a92f-c747-45a9-b14d-64bbd8fb5f8a",
        },
        {
          id: "1c5160fe-7311-4c98-ba0d-e4053fc5b11e",
          title: "Observabilidade",
          description:
            "Nessa aula iremos aprender como podemos fazer o monitoramento das nossas aplicações para saber dados como consumo de memória, CPU, requisições por minuto, etc. Esse tipo de abordagem é muito importante pois nos permite saber quando é necessário escalar a aplicação para aumentar sua capacidade de uso.",
          course_id: "2856a92f-c747-45a9-b14d-64bbd8fb5f8a",
        },
        {
          id: "33386e80-7c5e-4ca7-9a8c-733fec4d1095",
          title: "Diferentes ambientes",
          description:
            "Uma prática comum nas empresas é a configuração de mais de um tipo de ambiente de aplicação para deploy. Normalmente temos dois tipos de ambientes: Ambiente de desenvolvimento e ambiente de produção.\nDiferente do ambiente de desenvolvimento na nossa máquina, aqui os dois ambientes estão na nuvem. Nessa aula iremos entender um pouco mais sobre isso.",
          course_id: "2856a92f-c747-45a9-b14d-64bbd8fb5f8a",
        },
        {
          id: "c993a5e5-c726-4f14-b8e8-7d534abfa17d",
          title: "Entendendo CI/CD",
          description:
            "Agora que temos dois ambientes executando na nuvem, precisamos melhorar o fluxo de como acontece uma nova atualização. Perceba que por enquanto ainda temos algumas coisas manuais como por exemplo executar as migrations no banco de dados sempre que um novo código for enviado para o repositório no GitHub.",
          course_id: "2856a92f-c747-45a9-b14d-64bbd8fb5f8a",
        },
        {
          id: "bfa9ef2d-db7f-4d0f-bf70-89f936763b41",
          title: "Configurando o GitHub Actions",
          description:
            "Nessa aula partiremos para a mão na massa configurando as actions no GitHub que nada mais são que processos automatizados que serão executados quando uma ação escolhida por nós acontecer no repositório do projeto.",
          course_id: "2856a92f-c747-45a9-b14d-64bbd8fb5f8a",
        },
        {
          id: "24f7ece7-184b-4cff-8941-a68693d02df7",
          title: "CI/CD no ambiente de desenvolvimento",
          description:
            "Agora que temos a aplicação e actions configurados para o ambiente de produção, iremos configurar o mesmo para o ambiente de desenvolvimento.",
          course_id: "2856a92f-c747-45a9-b14d-64bbd8fb5f8a",
        },
        {
          id: "f2981b7f-0d1b-47e9-97b5-431faefacdd9",
          title: "Encerramento",
          description:
            "Nessa aula, André Kanayama faz um recap de tudo que foi aprendido ao longo do curso.",
          course_id: "2856a92f-c747-45a9-b14d-64bbd8fb5f8a",
        },
      ]);
    });
};
