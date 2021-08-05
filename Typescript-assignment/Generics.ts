
// GENERICS

//const addUID = (obj: object) => {
 //  let uid = Math.floor(Math.random() * 100);
  // return {...obj, uid};
// }

const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
  }
  
  const addUID1 = <T extends {name: string}>(obj: T) => {
     let uid = Math.floor(Math.random() * 100);
     return {...obj, uid};
   }
   
   let docOne1 = addUID({name: 'yoshi', age: 40});
   //let docTwo = addUID('shaun');
   
   console.log(docOne1.name);
  
   
   // with interfaces
   interface Resource<T> {
     uid: number;
     resourceName: string;
     data: T;
   }
   
   const docThree3: Resource<object> = {
     uid: 1, 
     resourceName: 'person', 
     data: { name: 'shaun' }
   };
   
   const docFour4: Resource<string[]> = {
     uid: 1, 
     resourceName: 'shoppingList', 
     data: ['bread', 'milk']
   };
   
   console.log(docThree3, docFour4);