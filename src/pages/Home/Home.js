import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import Header from '../../components/Header/Header'
import Loading from '../../components/loading'
import Babble from '../../components/Babble/Babble'
import BabbleEditor from '../../components/BabbleEditor/BabbleEditor'

import { FeedContext } from '../../context/FeedContext'
import { client } from '../../utils'

import './Home.css'
import TextTitle from '../../components/Text/title'

function Home() {

    const { feed, setFeed } = useContext(FeedContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        window.scrollTo(0, 0);

        setLoading(true);
        setFeed(null);

        client("/users/feed")
            .then((res) => {
                setFeed(res.data);
                setLoading(false);
            })
            .catch((res) => {
                toast.error(res)
                setLoading(false);
            });

    }, [setFeed])

    return (
        <div className="">
            <Header border>
                <TextTitle xbold>Home</TextTitle>
                {/*<Button icon>
                    <Icons.TimelineProp />
                </Button>*/}
            </Header>

            <BabbleEditor />

            {feed?.map((post) => (
                <Babble key={post._id} post={post} />
            ))}

            {loading && <div className="loading">
                <Loading />
            </div>
            }


            { feed && feed.length === 0 && !loading && (
                <div className="loading">
                    <TextTitle>Follow Others to See Their Posts..</TextTitle>
                </div>
            )}

        </div>
    )
}

export default Home
