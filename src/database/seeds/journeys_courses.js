exports.seed = (knex) => {
  return knex("journeys_courses")
    .del()
    .then(function () {
      return knex("journeys_courses").insert([
        {
          journey_id: "eca8e48a-57b3-46a1-a6ae-923aca77fc11",
          course_id: "23856860-f5b9-4b71-a92f-546902b8348c",
        },
        {
          journey_id: "eca8e48a-57b3-46a1-a6ae-923aca77fc11",
          course_id: "323ae098-1624-4e24-8607-1f3a04718b11",
        },
        {
          journey_id: "e774057d-f0e8-4d5f-8076-33522fffb96d",
          course_id: "4ffd086c-868f-44d1-9f7f-3adf8d7edcc4",
        },
        {
          journey_id: "e774057d-f0e8-4d5f-8076-33522fffb96d",
          course_id: "323ae098-1624-4e24-8607-1f3a04718b11",
        },
        {
          journey_id: "e774057d-f0e8-4d5f-8076-33522fffb96d",
          course_id: "19a31b7a-1286-4927-830e-564cbcd54a23",
        },
        {
          journey_id: "e774057d-f0e8-4d5f-8076-33522fffb96d",
          course_id: "afc1ef67-d0fa-4f96-824d-3dd90eab1c12",
        },
        {
          journey_id: "fbf45fa9-e0b4-4124-b438-fae74f28d6ad",
          course_id: "310b41eb-f40c-4d0e-a0c9-311f2d67c7dc",
        },
        {
          journey_id: "fbf45fa9-e0b4-4124-b438-fae74f28d6ad",
          course_id: "d1cb69bc-ad2b-4b29-abcc-d2514b0c57ed",
        },
        {
          journey_id: "ea9d3a03-bfb4-4160-b59a-6cc30e15b3af",
          course_id: "3b5792a0-d9e4-487c-ba13-275026be5efa",
        },
        {
          journey_id: "ea9d3a03-bfb4-4160-b59a-6cc30e15b3af",
          course_id: "f37347da-7fff-41c8-b66a-68fbbc28d9c5",
        },
        {
          journey_id: "ea9d3a03-bfb4-4160-b59a-6cc30e15b3af",
          course_id: "2ba9f95a-e17a-4ede-b754-0f73d36c3b42",
        },
        {
          journey_id: "73a0e476-b7b1-464d-9d73-8faa71b44922",
          course_id: "12e4c01f-a7ea-4c64-a656-8a9c7d0d3e61",
        },
        {
          journey_id: "14311775-e78a-430b-aa32-9544b4fc015c",
          course_id: "a69ee6be-b292-4cb9-a9a5-36481689a800"
        },
        {
          journey_id: "14311775-e78a-430b-aa32-9544b4fc015c",
          course_id: "1a99deef-b707-4431-ae13-22a82c9b94eb"
        },
        {
          journey_id: "14311775-e78a-430b-aa32-9544b4fc015c",
          course_id: "5286cb1e-96d7-4504-a66b-430262244dc8"
        },
        {
          journey_id: "eca8e48a-57b3-46a1-a6ae-923aca77fc11",
          course_id: "17d05a10-8193-44db-b091-51ead3e6d3d5"
        },
        {
          journey_id: "eca8e48a-57b3-46a1-a6ae-923aca77fc11",
          course_id: "23056992-cbf3-4f02-929f-fbe3e996627e"
        },
        {
          journey_id: "e774057d-f0e8-4d5f-8076-33522fffb96d",
          course_id: "ede24be4-c7f7-4190-b13a-1c178b4849c0"
        },
        {
          journey_id: "e774057d-f0e8-4d5f-8076-33522fffb96d",
          course_id: "74924a45-f351-456c-8667-80cdfd29249d"
        },
        {
          journey_id: "e774057d-f0e8-4d5f-8076-33522fffb96d",
          course_id: "2550c365-0d30-4405-a021-d739117064c8"
        },
        {
          journey_id: "eca8e48a-57b3-46a1-a6ae-923aca77fc11",
          course_id: "62a5ba54-7754-42c1-a30f-f0ae7eea5507"
        },
        {
          journey_id: "eca8e48a-57b3-46a1-a6ae-923aca77fc11",
          course_id: "5db4e1ed-de03-4903-9c75-5dcea0c37699"
        },
        {
          journey_id: "e774057d-f0e8-4d5f-8076-33522fffb96d",
          course_id: "e1ce993a-e3c7-458b-bc1f-3dfd5070fcfc"
        },
        {
          journey_id: "e774057d-f0e8-4d5f-8076-33522fffb96d",
          course_id: "7cfc5e1c-49c4-4812-8c7a-6826141d3ee0"
        },
        {
          journey_id: "e774057d-f0e8-4d5f-8076-33522fffb96d",
          course_id: "2856a92f-c747-45a9-b14d-64bbd8fb5f8a"
        }
      ]);
    });
};
