import './AnimalShow.css'
import { useState } from 'react'
import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'
import horse from './svg/horse.svg'

const svgMap = {
    // bird:bird,
    bird, // yukarıdakindan hiçbir farkı yok import etmeye yarar ve değişkene atar
    cat,
    cow,
    dog,
    gator,
    horse
}

function AnimalShow({ type }) {

    const [cliks, setCliks] = useState(0)
    const handleClick = () => {
        setCliks(cliks + 1)

    }



    return <div className='animal-show' onClick={handleClick}>
        <img className='animal' alt="animal" src={svgMap[type]} />
        <img className='heart' alt='heart' src={heart} style={{ width: 10 + 10 * cliks + 'px' }} />
    </div>
}

export default AnimalShow;