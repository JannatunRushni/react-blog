import React, {useState, useEffect} from 'react'
import axios from 'axios'
function DataFetchingOne() {
    const [loading, setloading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicod.com/posts/1')
        .then(response => {
            setloading(false)
            setPost(response.data)
            setError('')
        })
        .catch(error => {
            setloading(false)
            setPost({})
            setError('Somethimg went wrong!')
        })
    }, [])
  return (
    <div>
       {loading ? 'Loading' : post.title} 
       {error ? error : null}
    </div>
  )
}

export default DataFetchingOne