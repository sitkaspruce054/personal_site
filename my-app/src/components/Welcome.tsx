

import { TypeAnimation } from "react-type-animation"
export function Welcome(props: any) {

    return (
        <TypeAnimation
            sequence={['',5000,'Hello!',10000,'Welcome!',10000]}
            wrapper="span"
            speed = {1}
            style={{ fontSize: '5em',marginTop: '100px',}}
            repeat={Infinity}
        />


        
    )
}