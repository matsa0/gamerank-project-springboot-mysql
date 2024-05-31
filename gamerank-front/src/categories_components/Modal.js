import React from 'react'
import ReactDom from 'react-dom'

export default function Modal({open, children}) { //children is the content of the modal
    if(!open) return null;

    return ReactDom.createPortal(
        <>
            <div className='overlay-modal'>
                <div className='modal-style'>
                    {children}
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}
