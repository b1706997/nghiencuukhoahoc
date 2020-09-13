import React from 'react';

export function test(a,b)
{
    fetch('http://192.168.0.105/NghienCuuKhoaHoc/test.php',{
        method:'POST',
        header: {
            'content-type':'application/json'
        },
        body: JSON.stringify({
            A:'ABC'
        })
    })
    // .then((response)=>console.log(response.text()))
    .then((response) => response.json())
    .then((responseJson) => {console.log(responseJson.content)})
    .catch(function(error){
        console.log(error);
        alert(error.message);
    });
}

// export function test2(a,b)
// {
   
//     var request = new XMLHttpRequest();
//     request.onreadystatechange = (e) => {
//         console.log(e);
//         if (request.readyState !== 4) {
//             return;
//         }

//         if (request.status === 200) {
//             console.log('success', request.response);
//         } else {
//             console.warn('error');
//         }
//     };

//     request.open('GET', '127.0.0.1/NghienCuuKhoaHoc/test.php',true);
//     request.responseType="json";
//     request.send();
// }
