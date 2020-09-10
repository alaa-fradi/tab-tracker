import api from '@/services/api' //api object imported mel api file li mezelna ki 3malneh == axios object

export default{
  register(credentials){
    return api().post('register',credentials)
  }
}
