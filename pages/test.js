import axios from "axios"
import { useState } from "react"
import FormData from 'form-data';

export default function Test(){
    let formdata = new FormData()
    formdata = {
        data : "",
        file : "",
    }
    const [data,setData] = useState(formdata)
    const handleForm = (e) => {
        setData((d) => {
            return {
                ...d,
                data : e.target.value
            }
        })
    }

    console.log(data)
    
    const handleFIle = (e) => {   
        e.preventDefault() 
        setData((d) => {
            return {
                ...d,
                file : e.target.files[0]
            }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const config = {
            headers: { 'content-type': 'multipart/form-data' },
            onUploadProgress: (event) => {
              console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
            },
          };

        try {
            const response = await axios.post('/api/user/dokter/create',data,config);
            console.log(response)
            return response
        } catch (error) {
            console.log(error)
        }
        
    }
    
    return (
        <>
            <form action="" method="post">
                <input type="text" name="data" onChange={handleForm}/>
                <input type="file" name="file" onChange={handleFIle}/>
                <button onClick={handleSubmit}>Submit</button>
            </form>
            <h2></h2>
        </>
    )
}