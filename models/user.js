const mongoose = require('mongoose');

// Schema 생성
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,     // space(빈칸) 없애주는 역할
        unique: 1       // 중복 email 없게
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {     // 관리자, 유저 구분
        type: Number,
        default: 0
    },
    image: String,
    token: {        // 유효성 검사시 사용
        type: String
    },
    tokenExp: {     // token 유효기간
        type: Number
    }

});

const User = mongoose.model('User', userSchema)

module.exports = {User}     // 모듈 다른 곳에서 쓸수있게 

// Git - 분산 버전 관리 시스템
//  git init - git 저장소 만들기
//  git status  - 상태 표시
//  git add .   - working Directory => Staging Area(대기)
