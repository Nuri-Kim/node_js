const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    // init -> user 필드 자료형 지정, 테이블 관련 설정
    // associate -> 테이블 간의 관계 설정

    static init(sequelize){
        return super.init({
            id:{
                type : Sequelize.STRING(50),
                primaryKey : true,
            },
            pw:{
                type : Sequelize.STRING(50),
                allowNull : false,
            },
            age:{
                type : Sequelize.INTEGER,
                allowNull : false,
            },

        

        },{
            sequelize, //매개변수
            modelName:'User', //프로젝트에 사용할 모델의 이름
            tableName : 'Users', //실제 데이터베이스 테이블 이름
            charset : "utf8"

        });
        
        }
    static associate(db){
        //User /Project
        // db.User.hasMany(db.Project,{foreignKey:'id',sourceKey:'id'}); // -> 1 :N 의 관계
        // db.User.hasOne // -> 1: 1 관계
        // db.User.belongsToMany // -> 1 :N 의 관계
        // db.Project.belongsTo(db.User,{foreignKey:'id',targetKey:'id'}); // -> 1: 1 관계
    }
 
}