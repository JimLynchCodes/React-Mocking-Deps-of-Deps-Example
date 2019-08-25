import functionalDepService from './FunctionalDepService'

// const functionalAppService  = () => {

//   callDep = () => {

//     console.log('in FunctionalAppService')

//     functionalDepService.doThings()

//   }

// }

// module.exports = functionalAppService

export default {
  callDep: () => {
    console.log("in FunctionalAppService");

    functionalDepService.doThings();
  }
};
