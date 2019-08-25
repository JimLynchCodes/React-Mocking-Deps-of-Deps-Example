import ClassDepService from './ClassDepService'

module.exports = class AppService {
  
  callDep () {
    
    console.log('in class app service')
    
    const classDepService = new ClassDepService()
    classDepService.doThings()
    
  }
  
}

