import React, { useEffect, useState } from 'react'
import './CommentCard.css'
import axios from 'axios'
import personImage from '../assets/person-image.jpg'
import notesIcon from '../assets/notes-icon.png'
import starIcon from '../assets/star-icon.png'

const CommentCard = () => {
    const [userDetail, setUserDetail] = useState('');

    useEffect(() => {
        fetchUser();
    }, [])

    const fetchUser = async () => {
        await axios.get("http://localhost:3000/get")
            .then(result => setUserDetail(result.data[0]))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="card-container-box">
                <div className="card-container">
                    <div className="user-detail-box">
                        <div className="user-detail">
                            <div className="user-icon-box">
                                <img src={userDetail.userImage} alt="" className="user-icon" />
                            </div>
                            <div className="user-text-box">
                                <div className="user-name-box">
                                    {userDetail.username}
                                </div>
                                <div className="user-role-box">
                                    {userDetail.role}
                                </div>
                            </div>
                        </div>
                        <div className="user-follow-box">
                            Followed
                        </div>
                    </div>
                    <div className="user-comment-box">
                        <div className="user-comment">
                            {userDetail.comment}
                        </div>
                    </div>
                    <div className="task-review-box">
                        <div className="task-box">
                            <img src={notesIcon} alt="" className="task-icon" />
                            <div className="task-text">
                                <div className="task-number">{userDetail.task}</div> Task
                            </div>
                        </div>
                        <div className="review-box">
                            <img src={starIcon} alt="" className="review-icon" />
                            <div className="review-5-star">{userDetail.stars}</div>
                            <div className="review-number">({userDetail.reviews})</div> Reviews
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentCard
