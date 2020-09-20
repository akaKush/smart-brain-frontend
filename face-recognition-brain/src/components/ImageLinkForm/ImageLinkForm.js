import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3 white'>
                {'This Website detects faces in the pictures you upload. Give it a try!'}
            </p>
            <div className='center'>
                <div className='form pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='tex' placeholder='Insert an image here to detect the face'/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;