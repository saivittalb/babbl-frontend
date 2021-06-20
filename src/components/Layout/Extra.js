import React, { useContext } from 'react'
import { useLocation as locations } from "react-router-dom";

import './Extra.css'

import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'
import Loading from '../loading'
import Button from '../Button/Button.js'
import { Link } from 'react-router-dom';
import { Babbl } from '../icons'

import { FeedContext } from '../../context/FeedContext'

function Extra() {
    let router = locations();

    const { whoFollow, tags } = useContext(FeedContext);

    return (
        <section className="layout-explore">

        <div className="layout-explore--logo">
            <Link to="/"><Button icon><Babbl /></Button></Link>
        </div>

            <div className="layout-explore--stick">

                {router.pathname !== '/lists' &&
                    <List
                        title={`Who to follow`}
                        src="lists"
                    >
                        {whoFollow?.slice(0, 4).map((user) => (
                            <FollowSuggestion key={user._id} user={user} />
                        ))}

                        <div style={{ textAlign: "center" }}>
                            {!whoFollow && <Loading />}
                            {whoFollow?.length === 0 && 'There is no one else to follow.'}
                        </div>
                    </List>
                }

                {router.pathname !== '/explore' && 
                    <List
                        title="Trends for you"
                        src="explore"
                    >
                        {tags.slice(0, 4).map((tag) => (
                            <News key={tag} tag={tag} />
                        ))}

                        {!tags && <div style={{ textAlign: "center" }}><Loading /> </div>}

                    </List>
                }

            </div>
        </section>
    )
}

export default Extra
