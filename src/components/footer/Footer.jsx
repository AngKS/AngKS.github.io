import React, {useState} from 'react'


function Footer() {

    const [checked, setCheck] = useState(true)

    return (
        <div className="">
            {
                checked ?
                    <div className="bg-yellow d-flex justify-content-between align-items-center p-1">
                    <span>Created on 17 Aug 2021</span>
                        <i class="far fa-times-circle medium" onClick={e => setCheck(!checked)}></i>
                </div> :
                ""
            }
        </div>
    )
}

export default Footer
