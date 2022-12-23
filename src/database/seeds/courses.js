exports.seed = (knex) => {
  return knex("courses")
    .del()
    .then(function () {
      return knex("courses").insert([
        {
          id: "23856860-f5b9-4b71-a92f-546902b8348c",
          thumb:
            "https://assets.staart.com/app/_c/23856860-f5b9-4b71-a92f-546902b8348c/thumb/gridweb_thumbs_staart_Web_Card_Erick_3.png",
          description:
            "Por trás de todo site, aplicativo ou sistema existe uma área que é responsável por toda lógica, regras de negócio, armazenamento e processamento de dados, esse é o backend. Erick Wendel, com mais de 10 anos de carreira, irá descomplicar os conceitos fundamentais e indicar os passos para você dar o Staart na sua carreira em Back End.",
          instructor: "Erick Wendel",
          level: "beginner",
          title: "Programação Back End do Zero",
          slug: "comecando-na-programacao-back-end-do-zero",
        },
        {
          id: "323ae098-1624-4e24-8607-1f3a04718b11",
          thumb:
            "https://assets.staart.com/app/_c/323ae098-1624-4e24-8607-1f3a04718b11/thumb/thumb.jpeg",
          description:
            "Que tal aprender a programar hoje mesmo? A lógica de programação é o primeiro passo para alcançar esse objetivo e faz mais parte do seu dia a dia do que você imagina. Letícia Tiveron, Engenheira de Software da Meta (Facebook), apresentará o curso de lógica de programação em JavaScript e lhe guiará pelas suas primeiras linhas de código.",
          instructor: "Leticia Tiveron",
          level: "beginner",
          title: "Suas Primeiras Linhas de Código (JS)",
          slug: "suas-primeiras-linhas-de-codigo-(js)",
        },
        {
          id: "3b5792a0-d9e4-487c-ba13-275026be5efa",
          thumb:
            "https://assets.staart.com/app/_c/3b5792a0-d9e4-487c-ba13-275026be5efa/thumb/Trentim_Web_Card.jpg",
          description:
            "A transformação digital pode ser definida como um fenômeno que incorpora o uso da tecnologia digital às soluções de problemas tradicionais. Nesse curso, Mário Trentim, doutorando em Engenharia da Computação e Business Owner na Staart, abrirá a caixa de ferramenta básica para qualquer profissional do mercado e lhe mostrará na prática como dominá-la.",
          instructor: "Mário Trentim",
          level: "beginner",
          title: "Caixa de Ferramentas Básicas de Tecnologia",
          slug: "caixa-de-ferramentas-basicas-de-tecnologia",
        },
        {
          id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
          thumb:
            "https://assets.staart.com/app/_c/4ffd086c-868f-44d1-9f7f-3adf8d7edcc4/thumb/Reinaldo2Thumb.jpeg",
          description:
            "Que tal construir o seu primeiro site responsivo já se preocupando com acessibilidade? Reinaldo Ferraz, especialista e evangelista em Web com mais de 24 anos de experiência, professor e autor de quatro livros sobre o tema, te conduzirá ao entendimento pleno e construção do seu primeiro, de muitos sites que virão durante a sua jornada como Dev Front End.",
          instructor: "Reinaldo Ferraz",
          level: "beginner",
          title: "Construindo seu Primeiro Site (HTML e CSS)",
          slug: "construindo-seu-primeiro-site-(html-e-css)",
        },
        {
          id: "310b41eb-f40c-4d0e-a0c9-311f2d67c7dc",
          thumb:
            "https://assets.staart.com/app/_c/310b41eb-f40c-4d0e-a0c9-311f2d67c7dc/thumb/webcard3.jpg",
          description:
            "Neste curso você encontrará uma ampla visão sobre os Processos de UX, pois iremos desconstrui-los aprendendo de forma clara todas as etapas. Tudo isso juntamente a Rodrigo Lemes, Diretor de UX na Boa Vista.",
          instructor: "Rodrigo Lemes",
          level: "beginner",
          title: "Desconstruindo Processos de UX",
          slug: "desconstruindo-os-processos-de-ux",
        },
        {
          id: "afc1ef67-d0fa-4f96-824d-3dd90eab1c12",
          thumb:
            "https://assets.staart.com/app/_c/afc1ef67-d0fa-4f96-824d-3dd90eab1c12/thumb/Web_Card_1_1440x720.png",
          description:
            "O React é uma biblioteca criada pelo Facebook para criar elementos de interface que podem ser compartilhados e reutilizados em uma aplicação de forma rápida, simples e intuitiva. Nesse curso, Mateus Silva irá nos introduzir ao ecossistema do React para a construção de interfaces web. Iremos aprender os principais conceitos dessa ferramenta além de algumas dicas que com certeza irão otimizar o seu desempenho.",
          instructor: "Mateus Silva",
          level: "intermediate",
          title: "Fundamentos do React",
          slug: "fundamentos-do-react",
        },
        {
          id: "d1cb69bc-ad2b-4b29-abcc-d2514b0c57ed",
          thumb:
            "https://assets.staart.com/app/_c/d1cb69bc-ad2b-4b29-abcc-d2514b0c57ed/_b/webcard1.png",
          description:
            "Conheça a dimensão da área que trabalha em prol da Experiência do Usuário, além de cases que te impactam todos os dias. Daniel Furtado, com 25 anos de experiência em Design de Experiência, vai te mostrar como é trabalhar nessa área, quais habilidades e conhecimentos são essenciais para se destacar e quais passos você precisa seguir para dar o seu Staart na carreira de UX/UI Designer.",
          instructor: "Daniel Furtado",
          level: "beginner",
          title: "Começando em UX/UI Design",
          slug: "comecando-em-ui-ux-design",
        },
        {
          id: "19a31b7a-1286-4927-830e-564cbcd54a23",
          thumb:
            "https://assets.staart.com/app/_c/19a31b7a-1286-4927-830e-564cbcd54a23/_b/e97e6726-5722-4d0c-9cab-5e241c265a29.png",
          description:
            "Pense nos principais sites que você utiliza no seu dia a dia. Tudo o que você vê e interage é o que chamamos de Front End. Neste curso, Leonardo Scorza, nômade digital e desenvolvedor Front End há 11 anos, irá te ensinar os principais conceitos da web para que você inicie sua carreira na área. Compreenda também em detalhes como é o dia a dia de trabalho dos profissionais que constroem essas aplicações que não conseguimos mais viver sem.",
          instructor: "Leonardo Scorza",
          level: "beginner",
          title: "Programação Front-end do Zero",
          slug: "programacao-front-end-do-zero",
        },
        {
          id: "f37347da-7fff-41c8-b66a-68fbbc28d9c5",
          thumb:
            "https://content.staart.com/app/_c/f37347da-7fff-41c8-b66a-68fbbc28d9c5/_b/59920bd0-8093-400b-94a2-cea61b4402a0.jpg",
          description:
            "Aprenda como tornar seu dia a dia de trabalho mais produtivo e eficiente utilizando a suíte de ferramentas da Microsoft com o especialista Mário Trentim, atual Business Owner da Staart e reconhecido internacionalmente pela Microsoft como Microsoft Most Valuable Professional.",
          instructor: "Mário Trentim",
          level: "beginner",
          title: "Descomplicando o Microsoft 365",
          slug: "descomplicando-o-microsoft-365",
        },
        {
          id: "2ba9f95a-e17a-4ede-b754-0f73d36c3b42",
          thumb:
            "https://assets.staart.com/app/_c/2ba9f95a-e17a-4ede-b754-0f73d36c3b42/_b/20089aa0-7263-42b1-97d3-2c993ee0fdc2.png",
          description:
            "Hoje uma pessoa fora do universo de programação já é capaz de construir aplicativos com pouco ou nenhum código, de maneira fácil e rápida, a fim de modernizar processos, resolver difíceis desafios de negócios e tornar a empresa mais ágil. Mário Trentim, engenheiro e mestre pelo ITA, atual Business Owner da Staart, te conduzirá de forma prática no aprendizado dessa tecnologia que te dará autonomia para criar suas aplicações hoje mesmo.",
          instructor: "Mário Trentim",
          level: "beginner",
          title: "Criando Aplicativos Low Code com Power Apps",
          slug: "criando-aplicativos-low-code-com-power-apps",
        },
        {
          id: "12e4c01f-a7ea-4c64-a656-8a9c7d0d3e61",
          thumb:
            "https://assets.staart.com/app/_c/12e4c01f-a7ea-4c64-a656-8a9c7d0d3e61/_b/webcard1.png",
          description:
            "Há quem diga que os dados são mais valiosos que o petróleo, mas é preciso saber como transformá-los em inteligência e insights. Neste curso o ex-piloto da Força Aérea Brasileira, atual cientista de dados, Carlos Melo irá lhe apresentar as habilidades necessárias, a sua rotina profissional e como dar os seus primeiros passos em direção a esta carreira.",
          instructor: "Carlos Melo",
          level: "beginner",
          title: "Começando na área de Dados",
          slug: "comecando-na-area-de-dados",
        },
        {
          id: "468dbdd9-66bf-48ed-91fa-3dfdec5fba4e",
          thumb:
            "https://content.staart.com/app/_c/468dbdd9-66bf-48ed-91fa-3dfdec5fba4e/_b/069641d2-b5fd-45cc-a5f2-8728a11e7af6.png",
          description:
            'Você tem idéia de como a internet funciona? Desde que você escreve google.com no seu navegador, o que acontece a partir deste momento? Willian Molinari (PotHix), Desenvolvedor de Software há 15 anos e escritor do livro "Desconstruindo a Web" compartilha com você, neste curso, tudo o que acontece nos bastidores da Internet, as tecnologias que permitem essa requisição viajar saindo do seu navegador até chegar de volta em você. E aí, topa essa viagem?',
          instructor: "Willian Molinari",
          level: "beginner",
          title: "Desconstruindo a Web",
          slug: "desconstruindo-a-web",
        },
        {
          id: "a69ee6be-b292-4cb9-a9a5-36481689a800",
          thumb:
            "https://assets.staart.com/app/_c/a69ee6be-b292-4cb9-a9a5-36481689a800/_b/gridweb_thumbs_staart_Web_Card_1.jpg",
          description:
            "Já dominando a lógica de programação, chegou o momento de aprender os conceitos que farão você construir aplicações com maior performance e se destacar no mercado de trabalho dado que muitos profissionais não dominam esse assunto. Vanessa Weber e Gabriel Fróes, os CDF's do Código Fonte vão te ensinar de forma prática (mão no código) e extremamente didática quais as estruturas básicas para organizarmos os dados na memória do computador da melhor maneira possível.",
          instructor: "Gabriel e Vanessa",
          level: "intermediate",
          title: "Descomplicando as Estruturas de Dados (JS)",
          slug: "descomplicando-as-estruturas-de-dados-(js)",
        },
        {
          id: "8aabd52a-9de6-460d-ae89-7bab57ab9b27",
          thumb:
            "https://assets.staart.com/app/_c/8aabd52a-9de6-460d-ae89-7bab57ab9b27/_b/webcard1.png",
          description:
            "Será que você realmente utiliza o Pensamento Analítico para resolver os problemas cotidianos? Na sua empresa, as decisões são tomadas mais à base da intuição ou de fatos e dados? Neste curso, Pollyanna Gonçalves, Gerente de Análise e Ciência de Dados na Hotmart, lhe conduzirá a descobrir de forma prática a importância destas habilidades, será desafiado a fazer uma auto-análise e conhecerá os passos para se desenvolver e levar para seu contexto a cultura Data-Driven.",
          instructor: "Pollyanna Gonçalves",
          level: "beginner",
          title: "Pensamento Analítico e Data-Driven Decisions",
          slug: "pensamento-analitico-e-data-driven-decisions",
        },
        {
          id: "fc436ab1-50d9-4523-bc11-734bd2893f32",
          thumb:
            "https://assets.staart.com/app/_c/fc436ab1-50d9-4523-bc11-734bd2893f32/_b/webcard1.png",
          description:
            "Quais são as opções de carreira que existem no universo tech? Qual delas é a melhor? O Diretor de Tecnologia do Grupo Primo, Rodrigo Gianotto, te convida a participar do desafio de construir um produto junto com ele. Durante essa construção, nosso especialista lhe apresentará os papéis presentes numa área de tecnologia de forma extremamente didática. E aí, topa o desafio?",
          instructor: "Rodrigo Gianotto",
          level: "beginner",
          title: "Sua Estrada para Tecnologia",
          slug: "descomplicando-a-area-tech",
        },
        {
          id: "0636249f-b631-4804-8767-7e721a5271b0",
          thumb:
            "https://content.staart.com/app/_c/0636249f-b631-4804-8767-7e721a5271b0/_b/thumbnail (1).png",
          description:
            "Não existe nada 100% seguro quando o assunto é o meio digital. Logo os profissionais que eticamente descobrem as vulnerabilidade e falhas de segurança nas empresas antes que um hacker malicioso as descubra, são cada vez mais procurados. Thiago Bordini, com mais de 20 anos de experiência no mercado de Inteligência Cibernética e coordenador da primeira Pós graduação do assunto no país, irá te apresentar as opções de carreira dentro desse universo, as habilidades necessárias e os passos que precisa trilhar para ser Cyber Security Analyst.",
          instructor: "Thiago Bordini",
          level: "beginner",
          title: "Segurança Cibernética do Zero",
          slug: "comecando-na-seguranca-cibernetica-do-zero",
        },
        {
          id: "1a99deef-b707-4431-ae13-22a82c9b94eb",
          thumb:
            "https://assets.staart.com/app/_c/1a99deef-b707-4431-ae13-22a82c9b94eb/_b/e97e6726-5722-4d0c-9cab-5e241c265a29.png",
          description:
            "Pense que a principal ferramenta de um desenvolvedor ou desenvolvedora é o seu computador, correto?\nAs ferramentas que utilizamos para realizar qualquer tarefa na nossa máquina impactam diretamente na qualidade e performance com que o trabalho é feito. Pensando nisso, Leonardo Scorza, nômade digital e desenvolvedor Front End, te acompanhará durante o processo de instalação e configuração da principal ferramenta para o desenvolvimento de software: o editor de código.",
          instructor: "Leonardo Scorza",
          level: "intermediate",
          title: "Ambiente de Desenvolvimento VS Code",
          slug: "ambiente-de-desenvolvimento-vscode",
        },
        {
          id: "5286cb1e-96d7-4504-a66b-430262244dc8",
          thumb:
            "https://assets.staart.com/app/_c/5286cb1e-96d7-4504-a66b-430262244dc8/_b/31eaecf3-4778-46e2-91b3-f674beea445b.png",
          description:
            "Neste curso serão abordados conceitos básicos de versionamento de software, uma atividade fundamental no desenvolvimento de software de qualquer tamanho e categoria e como hospedar os seus projetos no GitHub, a principal plataforma em nuvem utilizada por desenvolvedores de todo o mundo para colaboração em equipe.",
          instructor: "Pedro Lacerda",
          level: "intermediate",
          title: "Git e GitHub na Prática​",
          slug: "git-na-pratica​",
        },
        {
          id: "17d05a10-8193-44db-b091-51ead3e6d3d5",
          thumb:
            "https://assets.staart.com/app/_c/17d05a10-8193-44db-b091-51ead3e6d3d5/_b/8bbe78e7-eee6-4ad9-982d-4227d2eac833.png",
          description:
            "A grande maioria dos aplicativos que você utiliza no dia a dia precisam armazenar dados como sua foto de perfil, lista de amigos, conversas, publicações, comentários e por aí vai, mas você sabe como isso tudo é armazenado e gerenciado? Chegou a hora de dar o seu Staart em Banco de Dados e aprender os conceitos práticos e teóricos de como funciona essa ferramenta base para a grande maioria dos serviços que utilizamos.\nNesse curso quem te acompanha é a Daniele Leão, programadora com mais de 13 anos de experiência, com foco em Back End.",
          instructor: "Daniele Leão",
          level: "intermediate",
          title: "Banco de Dados​",
          slug: "banco-de-dados​",
        },
        {
          id: "2b7e134e-87c3-40fb-885e-2fd438c9d4ea",
          thumb:
            "https://assets.staart.com/app/_c/2b7e134e-87c3-40fb-885e-2fd438c9d4ea/_b/cac94a51-de85-4bab-9914-376a861024b9.png",
          description:
            "JavaScript é uma linguagem de programação dinâmica muito utilizada nos navegadores. Foi criada com propósito de manipular elementos no HTML, mas acabou crescendo e atualmente podemos ver diversos ambientes que executam JavaScript.\n\nNeste curso, Keilla Menezes irá te apresentar os principais conceitos da programação com JavaScript, te permitindo entender a estrutura da linguagem e desenvolver pequenos programas que podem ser executados tanto no navegador quanto no Node.js, passando pelos gerenciadores de pacote e entendendo como funcionam as atualizações de pacotes de terceiros que podemos utilizar em nossos programas.",
          instructor: "Keilla Menezes",
          level: "intermediate",
          title: "Fundamentos do JavaScript",
          slug: "fundamento-do-javascript-web",
        },
        {
          id: "23056992-cbf3-4f02-929f-fbe3e996627e",
          thumb:
            "https://assets.staart.com/app/_c/23056992-cbf3-4f02-929f-fbe3e996627e/_b/e8f37a6e-6169-4bda-aeff-a20362ea8d7b.png",
          description:
            "O Node.js é uma plataforma que consegue executar o JavaScript pelo lado do servidor. Através dele podemos construir APIs e aplicações web escaláveis de alta performance. Neste curso vamos aprender os principais fundamentos dessa plataforma, estudando a fundo cada tópico para que possamos entender de fato como é o seu funcionamento e como podemos escrever códigos cada vez mais organizado usando as ferramentas certas.",
          instructor: "Rodrigo Botti",
          level: "intermediate",
          title: "Fundamentos do Node.js",
          slug: "fundamento-do-node",
        },
        {
          id: "ede24be4-c7f7-4190-b13a-1c178b4849c0",
          thumb:
            "https://assets.staart.com/app/_c/ede24be4-c7f7-4190-b13a-1c178b4849c0/_b/f1ef6fc5-6abc-48bf-8eab-29d1024c1573.png",
          description:
            "Você já imaginou como grandes aplicações Web funcionam? Como podemos organizar a nossa aplicação e otimizar o seu desempenho?\nChegou o momento de expandirmos o nosso arsenal de ferramentas web, construindo, a partir da lógica de programação com JavaScript, uma aplicação web completa que conta inclusive com interações do usuário para adicionar e remover itens da tela. Tudo isso reaproveitando os conhecimentos adquiridos até aqui somados com novos conceitos que serão apresentados neste curso.",
          instructor: "Vitor Alencar",
          level: "intermediate",
          title: "Caixa de Ferramentas JS​ Web",
          slug: "caixa-de-ferramentas-js​-web",
        },
        {
          id: "74924a45-f351-456c-8667-80cdfd29249d",
          thumb:
            "https://assets.staart.com/app/_c/74924a45-f351-456c-8667-80cdfd29249d/_b/Captura_de_tela_2022-07-22_044536.png",
          description:
            "Um dos principais requisitos de desenvolvedores Front End é a habilidade de trabalhar com requisições HTTP para o consumo de serviços externos que são responsáveis por manter toda a lógica de dados por trás de uma aplicação. Nesse curso iremos aprender de fato como se trabalhar com esse tipo de conexão entre servidores e clientes utilizando o React e o mais interessante aqui é que após a conclusão do curso, você será capaz de trabalhar com requisições HTTP independentemente da biblioteca ou framework que estiver utilizando.",
          instructor: "Mateus Silva",
          level: "intermediate",
          title: "Consumo de APIs com React",
          slug: "consumo-de-api's-com-react",
        },
        {
          id: "2550c365-0d30-4405-a021-d739117064c8",
          thumb:
            "https://assets.staart.com/app/_c/2550c365-0d30-4405-a021-d739117064c8/_b/Web_Card_3_280x147.png",
          description:
            "Nesse curso iremos aprender, na prática, como construir um site do absoluto zero, passando pela estrutura e estilização com as tecnologias HTML e CSS.\nAlém disso, você também irá disponibilizar esse site na internet para que qualquer pessoa com o link consiga acessá-lo.",
          instructor: "Vitor Alencar",
          level: "beginner",
          title: "HTML e CSS - Construindo seu primeiro site",
          slug: "html,-css-e-javascript",
        },
        {
          id: "62a5ba54-7754-42c1-a30f-f0ae7eea5507",
          thumb:
            "https://assets.staart.com/app/_c/62a5ba54-7754-42c1-a30f-f0ae7eea5507/_b/Web_Card_1_1440x720.png",
          description:
            "REST é um conjunto de padrões que foram criados como intuito de prover princípios para a utilização correta e semântica do protocolo HTTP, facilitando a manutenção e escalabilidades de APIs.\nNesse curso iremos aprender como aplicar esses padrões e como construir, do zero, uma API que pode ser feita a partir dos módulos nativos do Node.js ou utilizando alguma biblioteca ou framework que traz algumas facilidades e abstrações para o nosso dia a dia. Veremos como essas duas formas funcionam na prática.",
          instructor: "Rodrigo Botti",
          level: "intermediate",
          title: "Construindo e Consumindo APIs REST com Node.js",
          slug: "construindo-e-consumindo-api-rest​",
        },
        {
          id: "53cf1b57-cd2d-4fef-8e2a-75a04faab3e8",
          thumb:
            "https://assets.staart.com/app/_c/53cf1b57-cd2d-4fef-8e2a-75a04faab3e8/_b/image_12_5.png",
          description:
            'Nossa semana da programação do "zero ao deploy" realizada em Julho de 2022.',
          instructor: "Thaíssa Candella e Vitor Alencar",
          level: "beginner",
          title: "Quick Staart",
          slug: "quick-staart",
        },
        {
          id: "5db4e1ed-de03-4903-9c75-5dcea0c37699",
          thumb:
            "https://assets.staart.com/app/_c/5db4e1ed-de03-4903-9c75-5dcea0c37699/_b/thumb_web_banner_staart_30_1.png",
          description:
            "Um dos grandes momentos na evolução de um(a) desenvolvedor(a) é o entendimento sobre segurança, em especial quando se aprende e se aplica temas como autenticação e autorização. Software inseguro em produção é um grande risco, e pode acabar com uma empresa do dia pra noite. Neste curso o instrutor te guiará pelos conceitos por trás destes dois temas, e você será capaz de elevar o nível de segurança do seu backend em node.js.",
          instructor: "Lucas Santos",
          level: "intermediate",
          title: "Autenticação e Autorização em Node.js",
          slug: "autenticacao-e-autorizacao-em-node",
        },
        {
          id: "e1ce993a-e3c7-458b-bc1f-3dfd5070fcfc",
          thumb:
            "https://assets.staart.com/app/_c/e1ce993a-e3c7-458b-bc1f-3dfd5070fcfc/_b/resized_thumb.png",
          description:
            'Um dos grandes momentos na evolução de nós, desenvolvedores e desenvolvedoras, é quando passamos a entender mais sobre segurança, e neste curso vamos construir uma aplicação do zero com "React", implementando autenticação utilizando o Google Firebase como um acelerador do backend.',
          instructor: "Vitor Alencar",
          level: "beginner",
          title: "Autenticação e Armazenamento de Dados no React",
          slug: "autenticacao-e-armazenamento-de-dados",
        },
        {
          id: "7cfc5e1c-49c4-4812-8c7a-6826141d3ee0",
          thumb:
            "https://assets.staart.com/app/_c/7cfc5e1c-49c4-4812-8c7a-6826141d3ee0/_b/resized.png",
          description:
            "De nada adianta criarmos aplicações incríveis que se propõem a resolver problemas do mundo real se não conseguirmos expô-las ao mundo para que outras pessoas possam utilizá-las, não é mesmo?\nNesse curso, Vitor Alencar, Tech Lead na TaxFix, irá nos ensinar como realizar deploy de aplicações React, isto é, pegar o projeto da nossa máquina e mandar para servidores na internet de forma que qualquer pessoa consiga acessa-la.",
          instructor: "Vitor Alencar",
          level: "intermediate",
          title: "Deploy de aplicações React​",
          slug: "deploy-da-aplicacao-em-react​",
        },
        {
          id: "2856a92f-c747-45a9-b14d-64bbd8fb5f8a",
          thumb:
            "https://assets.staart.com/app/_c/2856a92f-c747-45a9-b14d-64bbd8fb5f8a/_b/resized.png",
          description:
            "Nesse curso, André Kanayama, Staff Software Engineer na Zé Delivery, irá nos mostrar na prática como fazer deploy de aplicações Node.js para que possamos disponibilizar nossos projetos no mundo real através de serviços na nuvem.",
          instructor: "André Kanayama",
          level: "intermediate",
          title: "Deploy de aplicações Node.js",
          slug: "deploy-da-aplicacao-em-node.js",
        },
      ]);
    });
};
