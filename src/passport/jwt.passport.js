//estrategia de passport:
import passport from 'passport';
import jwt, { ExtractJwt } from 'passport-jwt';
import { getJWTCookie } from '../utils.js';
import { UserModel } from '../models/user.model.js';

const JWTStrategy = jwt.Strategy

const initializePassport = () => {
  passport.use('jwt', new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromExtractors([getJWTCookie]),
    secretOrKey: process.env.SECRET
  }, async (payload, done) => {
    console.log(payload, "<- desde Passport jwt");

    try {
      //payload.email // el cuerpo del token decodificado
      const userFound = await UserModel.findOne({ email: payload.email }).populate('cart').lean()
      console.log("Usuario desde jwt.passport.js : ", userFound);
      if (!userFound) return done(null, false)

      return done(null, userFound)
    } catch (e) {
      return done(e)
    }
  }))
}

export default initializePassport;
