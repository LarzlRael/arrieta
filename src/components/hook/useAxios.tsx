import { useState, useEffect } from 'react'
import axios, { AxiosRequestConfig, AxiosResponseHeaders } from 'axios'
/* vite env */

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

const instancia = axios.create()

const useAxios = <T extends object>(axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<T>((null as unknown) as T)
  const [error, setError] = useState<any>('')
  const [loading, setLoading] = useState(true)
  const [header, setheader] = useState<any>()
  const fetchData = async () => {
    try {
      const result = axiosParams?.url
        ? await instancia.request({
            ...axiosParams,
            auth: {
              username: import.meta.env.VITE_WC_USERNAME,
              password: import.meta.env.VITE_WC_PASSWORD,
            }
        })
        : null
      setResponse(result?.data)
      setheader(result?.headers)
    } catch (error) {
      setError(error as string)
    } finally {
      setLoading(false)
    }
  }
  function reload() {
    fetchData()
  }

  useEffect(() => {
    const ac = new AbortController()
    fetchData()
    return () => ac.abort()
  }, [])

  return { response, error, loading, reload, header }
}
export default useAxios
