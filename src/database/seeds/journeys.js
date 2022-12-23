exports.seed = (knex) => {
  return knex('journeys').del()
    .then(function () {
      return knex('journeys').insert([
        {
          "icon": "",
          "thumb": "https://assets.staart.com/app/_p/eca8e48a-57b3-46a1-a6ae-923aca77fc11/_b/banner_jornada_backend.png",
          "description": "Por trás de todo grande site que você acessa, existe um bastidor denominado como \"Back End\", onde a principal lógica de comportamento dos sistemas são desenvolvidos. Nessa jornada você irá aprender os conceitos essenciais para aprender a programar, se desenvolver nessa carreira e conseguir o seu primeiro emprego com programação.",
          "title": "Desenvolvimento Back End",
          "id": "eca8e48a-57b3-46a1-a6ae-923aca77fc11",
          "slug": "jornada-desenvolvimento-back-end"
        },
        {
          "icon": "",
          "thumb": "https://assets.staart.com/app/_p/e774057d-f0e8-4d5f-8076-33522fffb96d/_b/banner_jornadafrontend.png",
          "description": "Que tal aprender a programar e desenvolver sites e aplicações Web completas? Essa jornada te guiará no caminho para praticar e obter os conhecimentos necessários e fundamentos sólidos para conseguir o seu primeiro emprego na área de desenvolvimento Front End.",
          "title": "Desenvolvimento Front End",
          "id": "e774057d-f0e8-4d5f-8076-33522fffb96d",
          "slug": "jornada-desenvolvimento-back-end"
        },
        {
          "icon": "",
          "thumb": "",
          "description": "Esta jornada te ensinará a conduzir processos de UX utilizando conceitos e fundamentos essenciais tanto do user experience quanto do design de interação, além de saber medir e iterar em cima dos resultados obtidos.​",
          "title": "Design UX/UI",
          "id": "fbf45fa9-e0b4-4124-b438-fae74f28d6ad",
          "slug": "jornada-design-de-experiencia-e-interface-(ux/ui)"
        },
        {
          "icon": "",
          "thumb": "https://assets.staart.com/app/_p/ea9d3a03-bfb4-4160-b59a-6cc30e15b3af/_b/banner_habilidades_digitais.png",
          "description": "Aqui você encontra um agrupamento de cursos que vão contribuir com o desenvolvimento das suas habilidades associadas à tecnologia digital, ou seja, como usar, integrar e aproveitar diferentes ferramentas para facilitar e agilizar o trabalho, bem como compreender as lógicas digitais que intervêm nos movimentos de mercado.",
          "title": "Habilidades Digitais",
          "id": "ea9d3a03-bfb4-4160-b59a-6cc30e15b3af",
          "slug": "habilidades-digitais"
        },
        {
          "icon": "",
          "thumb": "",
          "description": "Nesta jornada, você fará uma imersão no universo dos dados, desenvolvendo de forma prática as principais habilidades que são necessárias tanto para analista, cientistas quanto engenheiros de dados. Na prática, você aprenderá como tomar decisões baseadas em dados, se tem Pensamento Analítico, programação com python para análise de dados, coleta, verificação e limpeza dos dados, banco de dados, como analisar, visualizar e apresentar suas análises.",
          "title": "Dados",
          "id": "73a0e476-b7b1-464d-9d73-8faa71b44922",
          "slug": "jornada-de-dados"
        },
        {
          icon: "",
          thumb: "",
          description: "Aprenda aqui os fundamentos de lógica de programação, estrutura de dados, estilização de páginas, carreira tech, e outros.",
          title: "Fundamentos de Programação",
          id: "14311775-e78a-430b-aa32-9544b4fc015c",
          slug: "jornada-fundamentos-de-programacao"
        }
      ])
    })
}
