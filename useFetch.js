import { useState, useEffect, useRef } from "react"

export const useFetch = ( url ) => {
    
    const [state, setState] = useState({data: null, loading: true, error: null});
    const isMounted = useRef(true);
    useEffect(() => {
        return () => {
            isMounted.current = false;      //lo seteamos false
        }
    }, [])

    useEffect ( () => {
        setState({data: null, loading: true, error: null})
        fetch( url )
            .then( resp => resp.json())
            .then( data => {
                setTimeout( () => {
                    if(isMounted.current){
                        setState({
                            loading:false,
                            data: data,
                            erro: null
                        })
                    }else{
                        console.log('unmounted');
                    }
                },4000)
            })
    },[url])
    
    return state
}
