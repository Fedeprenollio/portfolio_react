import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export function useScrollToTop (){
    const navigate = useNavigate()
    useLayoutEffect(() => {
      window.scrollTo(0, 0)
    }, [navigate])
 
}


