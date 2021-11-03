import React from 'react'
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

export default function Delete({del}) {

    let {id} = useParams();
    id = parseInt(id);
    let history = useHistory();
    

    const handle = (event) => {

        event.preventDefault();
        alert("Delete the Blog? Action cannot be undone.");
        console.log("In Delete.jsx: ",id);
        del(id);
        history.push('/post');
      
        }

    return (
        <div>
            <button type="submit" onClick={handle}> Delete </button>
        </div>
    )
}
