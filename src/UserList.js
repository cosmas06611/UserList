    import React from 'react'


    const UserList = (props) => {
    return (
        <div>
            <ul>
                <h2>
                    LIST OF USERS
                </h2>
        {props.list.map((list, index) =>(
            <li key ={list.id}>{list.name}</li>
        ) 
        
        )}
        </ul>
        </div>
    )
    }

    export default UserList
   