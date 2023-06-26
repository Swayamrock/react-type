import React, { useEffect, useState } from "react";

 function MapUseCase () {
  let arr = ["apple", "orabge", "banana"];
    const [arrNew, setArrNew] = useState([arr]);
    console.log(arrNew);
    useEffect(() => {
      
       },[arrNew])
       const handleAdd = () => {
        const newArr = [{...arr}, arr.push("Grapes")];
        setArrNew(arrNew);
        console.log(arrNew);
        console.log(newArr,"from handleadd")
       }
   
  console.log(arr);

  const renderData = () => {
    return (
      <>
        {arrNew.map((val) => {
          return (
            <div key={1}>
              <span>{val}</span>
            </div>
          );
        })}
      </>
    );
  };

//    const arr1 = [
//     {id: 1, name: 'Alice'},
//     {id: 1, name: 'Bob'},
//     {id: 3, name: 'Charlie'},
//   ];
  
//   const newArr = arr1.map(obj => {
//     if (obj.name === "Bob") {
//       return {...obj, name: 'Alfred'};
//     }
  
//     return obj;
//   });
//   console.log(newArr);


   const Addition = (a: number, b: number) => {
     return a + b;
   };

   return (
     <>
       hello
       <div>{Addition(3, 5)}</div>
       <>{renderData()}</>
       <><input type="button" value="Add" onClick={handleAdd} /></>
     </>
   );
 }
 export default MapUseCase;