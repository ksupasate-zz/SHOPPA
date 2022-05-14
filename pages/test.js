// import React, { useEffect, useRef, useState } from "react";
// import { useCookies } from "react-cookie";


// export default function Cart() {
//     const [cookies, setCookie, removeCookie] = useCookies(['test']);
//     cookies['test']=[
//         {
//             id : 1,
//             data : {
//                 name : "WOWZA"
//             },
//         }
//     ]
//     for(let i = 0 ; i < 2 ; i++){
//         console.log (cookies['test'][i])
//     }
//     cookies['test'].push({
//         id : 2,
//         data : {
//             name : "Kom"
//         },
//     })
//     for(let i = 0 ; i < 2 ; i++){
//         console.log (cookies['test'][i])
//     }
//     cookies['test'][0].data.name = "Fifa"
//     for(let i = 0 ; i < 2 ; i++){
//         console.log (cookies['test'][i])
//     }
//     console.log(cookies['test'].length)
//     return (
//         <div>

//         </div>
//     )
// }
