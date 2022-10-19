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

const patchTitleActivity = async (id, data) => {
    try {
        const response = await fetch(`${BASE_URL}/activity-groups/${id}`, {
            
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    title : data.title
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


const addTodoItems = async (activity_group_id, title, priority) => {
    try {
        const response = await fetch(`${BASE_URL}/todo-items`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    activity_group_id,
                    title,
                    priority
                }
            )
        });

        const responseJson = await response.json();
        return responseJson;

    } catch (error) {
        throw new Error(error.message);
    }
}

const patchChacked = async (id, chackedInput) => {
    try {
        const response = await fetch(`${BASE_URL}/todo-items/${id}`, {
            method: 'PATCH',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    activity_group_id : chackedInput.activity_group_id,
                    is_active : chackedInput.is_active,
                    priority: chackedInput.priority,
                    title: chackedInput.title,
                }
            )
        });
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        throw new Error(error.message);
    }
}

const updateTodo = async (id, data) => {
    try {
        const response = await fetch(`${BASE_URL}/todo-items/${id}`,{
            data,
            method: 'PATCH',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    activity_group_id : data.activity_group_id,
                    is_active : data.is_active,
                    priority: data.priority,
                    title: data.title,
                }
            )
        });
        const responseJson = await response.json();
        console.log(responseJson);
        return responseJson;
    } catch (error) {
        throw new Error(error.message);
    }
}

const deleteTodo = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/todo-items/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
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
    getTodo,
    addTodoItems,
    patchChacked,
    deleteTodo,
    updateTodo
}
