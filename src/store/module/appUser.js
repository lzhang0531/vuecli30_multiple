import Cookie from 'js-cookie'
import createLogger from 'vuex/dist/logger'

const COOKIE_NAME = 'movie_trailer_user'
const getCookieUser = () => {
  return Cookie.get(COOKIE_NAME)
    ? JSON.parse(Cookie.get(COOKIE_NAME))
    : null
}

const debug = process.env.NODE_ENV !== 'production'

const appUser = {
  strict: debug,
  state: {
    user: getCookieUser()
  },
  mutations: {
    setUserInfo (state, info) {
      Cookie.set(COOKIE_NAME, info, { expires: 1 })
      state.user = info
    }
  },
  plugins: debug ? [createLogger()] : []
}

export default appUser
