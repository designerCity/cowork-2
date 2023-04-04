// 'use strict';
const {Model} = require('sequelize');

// 하나의 함수가 외부로 공개되어 있다.
  // 함수 안에 Member Class 가 들어있음
   // 이 Member Class 는 sequelize 안에 있는 Model Class 를 상속 받고 있다.
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {}
  // init 부분이 모델과 테이블을 연동하는 코드
  Member.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    team: DataTypes.STRING,
    position: DataTypes.STRING,
    emailAddress: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    admissionDate: DataTypes.DATE,
    birthday: DataTypes.DATE,
    profileImage: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Member',
  });
  return Member;
};