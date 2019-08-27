import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

 jest.mock('./class-services/ClassDepService.js', () => {

   class ClassAppService {
     doThings() {
       console.log('woahh, this ClassDepService function call was mocked from App.test.js!')
     }
   }
   return ClassAppService

 });

 jest.mock('./functional-services/FunctionalDepService', () => {

  return {
    doThings: () => {
      console.log('woahh, this FunctionalDepService function call was mocked from App.test,js!')
    }
  }

});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
