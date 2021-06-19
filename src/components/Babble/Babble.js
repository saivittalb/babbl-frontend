import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

import { client, timeSince } from '../../utils'

import Button from '../Button/Button'
import Avatar from '../Avatar/Avatar'
import TextBody from '../Text/body'
import { Reply, Rebabble, Like, Share, LikeFill } from '../icons'

import './Babble.css'

function Babble({ post }) {
    const { _id, isLiked, isRebabbled, comments, rebabbleCount, likesCount, user, createdAt, caption, tags, files } = post
    const history = useHistory()
    const [likedState, setLiked] = useState(isLiked);
    const [likesState, setLikes] = useState(likesCount);

    const [rebabbled, setRebabbled] = useState(isRebabbled);
    const [rebabbles, setRebabbles] = useState(rebabbleCount);

    const handle = user?.username;

    const handleToggleLike = () => {
        if (likedState) {
            setLiked(false);
            setLikes(likesState - 1)
            client(`/posts/${_id}/toggleLike`);
        } else {
            setLiked(true);
            setLikes(likesState + 1)
            client(`/posts/${_id}/toggleLike`);
        }
    };

    const handleToggleRebabble = () => {
        if (rebabbled) {
            setRebabbled(false);
            setRebabbles(rebabbles - 1)
            client(`/posts/${_id}/toggleRebabble`);
        } else {
            setRebabbled(true);
            setRebabbles(rebabbles + 1)
            client(`/posts/${_id}/toggleRebabble`);
        }
    }

    return (
        <div className="page-babble">
            {isRebabbled && <span className="page-babble__rebabble"> <Rebabble /> {user.username} Rebabbled</span>}

            <div className="page-babble__container">

                <div className="page-babble__avatar">
                    <Avatar className="" size='medium' onClick={() => history.push(`/${user.username}`)} />
                </div>
                <div className="page-babble__body">
                    <div className="babble-info-user">
                        <TextBody bold onClick={() => history.push(`/${user?.username}`)}>{user?.username}</TextBody>
                        <span className="secondary">{timeSince(createdAt)} ago</span>
                    </div>

                    <span>
                        <Link to={`/${handle}/status/${_id}`}>
                            <p>{caption}</p>
                        </Link>
                    </span>

                    <div className="tags">
                        {tags
                            ? tags.map((tag) => (
                                <Link key={tag} to={`/explore?tag=${tag}`} className="babble--tag">
                                    {`#${tag}`}
                                </Link>
                            ))
                            : null}
                    </div>

                    <Link to={`/${handle}/status/${_id}`} className="babble__image">
                        <img src={files?.length && files[0]} alt="" />
                    </Link>


                    <div className="page-babble__body--stats">
                        <div>
                            <Button icon href={`/${handle}/status/${_id}`}>
                                <Reply />
                            </Button>
                            <span>{comments.length > 0 && comments.length}</span>
                        </div>

                        <div className={rebabbled ? "isRebabble" : ""}>
                            <Button icon onClick={handleToggleRebabble} >
                                <Rebabble />
                            </Button >
                            <span>{rebabbles}</span>
                        </div>

                        <div className={likedState ? "isLiked" : ""} >
                            <Button icon onClick={handleToggleLike}>
                                {likedState ? <LikeFill /> : <Like />}
                            </Button>
                            <span>{likesState}</span>
                        </div>
                        <Button icon href={`/${handle}/status/${_id}`}>
                            <Share />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Babble
