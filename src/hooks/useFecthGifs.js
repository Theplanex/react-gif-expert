import React, { useEffect, useState } from 'react'
import {getGifs} from '../helpers/getGifts'


export const useFecthGifs = ( category ) => {
  
    const [images, setImages] = useState( [] )
    const [isLoading,setIsLoading] = useState(false);
    const getImages = async() => {
        const newImage = await getGifs( category );
        setImages( newImage );
        setIsLoading(true);
    }

    useEffect( () => {
        getImages();
    }, []);
    

    return{
        images,
        isLoading
    }
  
}

export default useFecthGifs