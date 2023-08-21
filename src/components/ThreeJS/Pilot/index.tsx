import React, { useEffect, useState } from "react";

const Pilot = () => {
  const [filenum, setFilenum] = useState<number>(0);
  const pic = [...Array(61).keys()].map((v) => (
    <img
      style={{ width: "500px", height: "500px" }}
      src={`/img/pilot-game/00${v < 10 ? "0" + v : v}.png`}
    />
  ));

  // useEffect(() => {
  //     let timer = setInterval(() => {
  //         if (filenum == 60) {
  //             setFilenum(0);
  //         } else {
  //             setFilenum(filenum + 1);
  //         }
  //     }, 30);

  //     return () => clearInterval(timer)
  //   }, [filenum]);

  return <>{pic[0]}</>;
  {
    /* <img style={{width : '500px', height : '500px'}} src={`/img/pilot-game/00${filenum < 10 ? '0' + filenum : filenum}.png`}/> */
  }
};

export default Pilot;

// import React, { useEffect, useState } from "react";

// interface PilotForm {
//     num : number;
// }

// const Pilot = () => {
//     const pic =  [...Array(61).keys()].map((v) =>  <img style={{width : '500px', height : '500px'}} src={`/img/pilot-game/00${v < 10 ? '0' + v : v}.png`}/>)
//     const [num, setNum ] = useState<number>(0);

//     useEffect(() => {
//         let timer = setInterval(() => {
//             if (num == 60) {
//                 setNum(0);
//             } else {
//                 setNum(num + 1);
//             }
//         }, 100);

//         // return () => clearInterval(timer)
//       }, [num]);

//     return <>
//     {
//     pic[num]
//     }
//     </>
// }

// export default Pilot;
