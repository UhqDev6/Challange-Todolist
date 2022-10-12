const BASE_URL = 'https://todo.api.devcode.gethired.id';
const BASE_EMAIL = 'ulhaqitcom@gmail.com';
const TITLE = 'New Activity';

const getActivity = async () => {
    const response = await fetch(`${BASE_URL}/activity-groups?email=${BASE_EMAIL}`);
    const responseJson = await response.json();
    return responseJson;
    // if(responseJson.status !== 'success') {
    //     return {
    //         error: true,
    //         data: null
    //     }
    // }
    // return {
    //     error: false,
    //     data: responseJson.data
    // }
}

const postActivity = async ({title, email}) => {
    const response = await fetch(`${BASE_URL}/activity-groups`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                title,
                email

            }
        ),
    });
    const responseJson = await response.json();
    return responseJson;

// const postActivity = async (title) => {
//     const payload =  {
//             title : TITLE,
//             email: BASE_EMAIL,
//     }
//     const response = await fetch(`${BASE_URL}/activity-groups`,payload,{
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(
//             {
//                 title

//             }
//         ),
//     });
//     const responseJson = await response.json();
//     return responseJson;

    // if(responseJson.status !== 'success') {
    //     return {
    //         error: true,
    //         data: null
    //     }
    // }

    // return {
    //     error: false,
    //     data: responseJson.data
    // }
}

const deleteActivity = async (id) => {
    const response = await fetch(`${BASE_URL}/activity-groups/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    });

    const responseJson = await response.json();
    return responseJson

}


export {
    getActivity,
    postActivity,
    deleteActivity,
}
