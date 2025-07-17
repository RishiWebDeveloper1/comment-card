import React, { useEffect, useState } from 'react'
import './CommentCard.css'
import personImage from '../assets/person-image.jpg'
import notesIcon from '../assets/notes-icon.png'
import starIcon from '../assets/star-icon.png'

const CommentCard = () => {
    const [userDetail, setUserDetail] = useState('');

    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = () => {
        axio.get("http://localhost:3000/get")
        .then(result => setUserDetail(result.data))
        .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="card-container-box">
                <div className="card-container">
                    <div className="user-detail-box">
                        <div className="user-detail">
                            <div className="user-icon-box">
                                <img src={personImage} alt="" className="user-icon" />
                            </div>
                            <div className="user-text-box">
                                <div className="user-name-box">
                                    Alex Stanton
                                </div>
                                <div className="user-role-box">
                                    UI/UX Designer
                                </div>
                            </div>
                        </div>
                        <div className="user-follow-box">
                            Followed
                        </div>
                    </div>
                    <div className="user-comment-box">
                        <div className="user-comment">
                            Hi, I'm Alex Stanton. I am a doctoral student at
                            Oxford University majoring in UI / UX...
                        </div>
                    </div>
                    <div className="task-review-box">
                        <div className="task-box">
                            <img src={notesIcon} alt="" className="task-icon" />
                            <div className="task-text">
                                <div className="task-number">60</div> Task
                            </div>
                        </div>
                        <div className="review-box">
                            <img src={starIcon} alt="" className="review-icon" />
                            <div className="review-5-star">4,9</div>
                            <div className="review-number">(970)</div> Reviews
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentCard
