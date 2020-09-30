const passport = require('passport')
const KakaoStrategy = require('passport-kakao').Strategy

passport.use(new KakaoStrategy({

    clientIDL: "d5f4d332769b77a9bd0427eba726ec6a",
    callbackURL: "http://localhost:8080"
},
    (accessToken, refreshToken, profile,done) => { console.log(1) }


))