import { React, useState, useEffect } from 'react'
import { GifItem } from '../components/GifItem';
import useFecthGifs from '../hooks/useFecthGifs';


export function GifGrid({ category }) {

    const { images, isLoading } = useFecthGifs(category);

    return (<>
        <h3 key={category}> {category} </h3>

        {
            isLoading == true && (<h2>Cargando......</h2>)
        }

        <div className="card-grid">
            {
                images.map((image) => {
                    return < GifItem
                        key={image.id} {...image} />
                })

            }
        </div>
    </>
    )
}
