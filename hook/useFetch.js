import { View, Text } from 'react-native'
import {useEffect, useState} from 'react'
import axios from 'axios'

const useFetch = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchData = async ()=>{
        setIsLoading(true)

        try {
            const response = await axios.get("https://ecommerce-backend-f1kw.onrender.com/api/products")
            setData(response.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
        }finally{
            setIsLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    }, [])

    const referch = ()=>{
        setIsLoading(true)
        fetchData()
    }

  return { data, isLoading, error}
}

export default useFetch