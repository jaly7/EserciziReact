import React from 'react';


function ButtonWithImage() {
    function handleImage (event) {
        console.log(event.target.src);
    } 
    return (
        <div>
        <button name="myButton" onClick={handleImage}>
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUx9sEEyWrFj77UiLgRqu_0HNC5VpmNRaLmw&s" 
                alt="Image" 
                style={{width:"70px"}} 
            />
        </button>            
        </div>

    );
}

export default ButtonWithImage;
