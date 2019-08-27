import ClassDepService from './ClassDepService'

class ClassAppService {
  
  callDep () {
    
    console.log('in class app service')
    
    const classDepService = new ClassDepService()
    classDepService.doThings()
    
  }
  
}

export default ClassAppService
