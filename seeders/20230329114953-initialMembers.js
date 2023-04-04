// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// seed 파일은 db 에 데이터를 저장하는 파일인데, 적절히 데이터를 저장하면, db 에 저장된 데이터를 가져와서 사용할 수 있다.
// seed 파일을 만들기 위해서는, sequelize-cli 를 설치해야 한다.
// sequelize-cli 를 설치하면, sequelize db:seed:all 명령어를 사용할 수 있다.
// sequelize db:seed:all 명령어를 사용하면, seeders 폴더에 있는 모든 seed 파일을 실행시킨다.
// seed 파일을 실행시키면, db 에 데이터가 저장된다.
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Members', [
      // mbti 데이터 형식에 맞춰서 데이터 세팅 코드
      {
        id: 1,
        name: '김민수',
        age: 20,
        mbti: 'ISTJ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {  
        id: 5,
        name: 'Danial',
        team: 'marketing',
        position: 'Marketing Manager',
        emailAddress: 'danial@google.com',
        phoneNumber: '010-xxxx-xxxx',
        admissionDate: '2021/04/21',
        birthday: '1991/07/12',
        profileImage: 'profile5.png',
      },
      {
        id: 6,
        name: 'George',
        team: 'marketing',
        position: 'Marketing Staff',
        emailAddress: 'george@google.com',
        phoneNumber: '010-xxxx-xxxx',
        admissionDate: '2020/01/06',
        birthday: '1997/02/09',
        profileImage: 'profile6.png',
      },
      {
        id: 7,
        name: 'Henry',
        team: 'marketing',
        position: 'Marketing Staff',
        emailAddress: 'henry@google.com',
        phoneNumber: '010-xxxx-xxxx',
        admissionDate: '2020/04/03',
        birthday: '1997/08/18',
        profileImage: 'profile7.png',
      },
      {
        id: 8,
        name: 'James',
        team: 'sales',
        position: 'Sales Manager',
        emailAddress: 'james@google.com',
        phoneNumber: '010-xxxx-xxxx',
        admissionDate: '2020/11/26',
        birthday: '1993/05/22',
        profileImage: 'profile8.png',
      },
      {
        id: 9,
        name: 'Kevin',
        team: 'sales',
        position: 'Sales Staff',
        emailAddress: 'kevin@google.com',
        phoneNumber: '010-xxxx-xxxx',
        admissionDate: '2020/06/19',
        birthday: '1989/06/10',
        profileImage: 'profile9.png',
      },
      {
        id: 10,
        name: 'Michael',
        team: 'sales',
        position: 'Sales Staff',
        emailAddress: 'michael@google.com',
        phoneNumber: '010-xxxx-xxxx',
        admissionDate: '2019/11/12',
        birthday: '1992/09/17',
        profileImage: 'profile10.png',
      },
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Members', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
