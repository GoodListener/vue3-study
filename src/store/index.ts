import userStore from './user'
import workStore from './work'

export default {
  ...userStore,
  ...workStore,
}
