const BASE_URL = 'https://todo.api.devcode.gethired.id';
const BASE_EMAIL = 'ulhaqitcom@gmail.com';

const getActivity = async () => {
    try {
        const response = await fetch(`${BASE_URL}/activity-groups?email=${BASE_EMAIL}`);
        const responseJson = await response.json();
        return responseJson;   
    } catch (error) {
        throw new Error(error.message);
    }
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
    try {
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
    } catch (error) {
        throw new Error(error.message);
    }

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
    try {
        const response = await fetch(`${BASE_URL}/activity-groups/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
    
        const responseJson = await response.json();
        return responseJson     
    } catch (error) {
        throw new Error(error.message);
    }

}

const getDetailActivity = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/activity-groups/${id}`);
        const responseJson = await response.json();
        return responseJson;

    } catch (error) {
        throw new Error(error.message);
    }
}

const patchTitleActivity = async (id, title) => {
    try {
        const response = await fetch(`${BASE_URL}/activity-groups/${id}`, {
            
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    title
                }
            ),
        });

        const responseJson = await response.json();
        return responseJson;

    } catch (error) {
        throw new Error(error.message);
    }
}

const getTodo = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/todo-items?activity_group_id=${id}`);
        const responseJson = await response.json();
        return responseJson;
    
    } catch (error) {
        throw new Error(error.message);
    }
}



export {
    getActivity,
    postActivity,
    deleteActivity,
    getDetailActivity,
    patchTitleActivity,
    getTodo
}
