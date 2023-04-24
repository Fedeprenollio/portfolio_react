import { useLayoutEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
export function useScrollToTop (){
    const {pathname} = useLocation()
    useLayoutEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])
 
}


