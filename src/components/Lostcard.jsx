
import './lost.css';
import React, { useState } from 'react'

function Lost(props) {
    const [showMore, setMore] = useState(false);
    const previewText = props.description.slice(0, 70);

    function toggleText() {
        setMore(!showMore);
    }

    return (
        <div className="lost">
            <img src={props.image} alt="lost-img" className="img" />
            <h3>{props.tag}</h3>
            <p>
                {showMore ? (
                    <>
                        {props.description}
                        <br />
                        <strong>Date:</strong> {props.date}
                        <br />
                        <strong>Email:</strong> {props.email}
                    </>
                ) : (
                    previewText + '....'
                )}
                <span className="see-more" onClick={toggleText}>
                    {showMore ? ' See less' : ' See more'}
                </span>
            </p>
        </div>
    );
}

export default Lost;
       
