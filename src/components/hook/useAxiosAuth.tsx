import { useState, useEffect } from 'react'
import axios, { AxiosRequestConfig, AxiosResponseHeaders } from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

axios.interceptors.request.use(
  (config) => {
    const token_seguridad = window.localStorage.getItem('token_seguridad')
    if (token_seguridad) {
      config.headers!.Authorization = 'Bearer ' + token_seguridad
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
const useAxiosAuth = <T extends object>(axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<T>((null as unknown) as T)
  const [error, setError] = useState<any>()
  const [loading, setLoading] = useState(true)
  const [header, setheader] = useState<any>()

  const fetchData = async () => {
    try {
      const result = axiosParams?.url
        ? await axios.request({
            ...axiosParams,
            auth: {
              username: import.meta.env.VITE_WC_USERNAME,
              password: import.meta.env.VITE_WC_PASSWORD,
            },
          })
        : null
      setResponse(result?.data)
      setError(result?.status)
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
export default useAxiosAuth
