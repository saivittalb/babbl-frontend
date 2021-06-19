import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

import { client } from '../../utils';

import Babble from '../../components/Babble/Babble';
import Header from '../../components/Header/Header';
import TextTitle from '../../components/Text/title';
import Loading from '../../components/loading'
import SearchBox from '../../components/SearchBox/SearchBox';
import Comment from '../../components/Comment/Comment';


function BabbleDetail() {
    const params = useParams()

    const [babble, setBabble] = useState(null);
    const [comments, setComments] = useState(null);
    const [commentText, setCommentText] = useState("");


    const handleAddComment = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();

            if (!commentText) return toast.error('Write a comment first..:)')

            client(`/posts/${babble._id}/comments`, {
                body: { text: commentText },
            }).then((resp) => {
                setComments([...comments, resp.data]);
                toast.success('Comment made.')
            });

            setCommentText('')
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        client(`/posts/${params.babbleId}`)
            .then((res) => {
                setBabble(res.data)
                setComments(res.data.comments)
            })
            .catch((err) => toast.error(err))

    }, [params.babbleId])

    return (
        <div>

            <Header border>
                <TextTitle xbold>Babble</TextTitle>
            </Header>
            {babble ?
                (
                    <>
                        <Babble post={babble} />
                        <SearchBox
                            text='Babble your reply'
                            icon={false}
                            onChange={(e) => setCommentText(e.target.value)}
                            value={commentText}
                            onKeyPress={handleAddComment}
                        />

                        <div style={{ marginTop: '10px' }}>
                            {comments?.map(comment => (
                                <Comment key={comment._id} comment={comment} />
                            ))}
                        </div>
                    </>
                ) :
                <div className="loading">
                    <Loading />
                </div>
            }

        </div>
    )
}

export default BabbleDetail
