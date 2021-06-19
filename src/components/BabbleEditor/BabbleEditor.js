import React, { useContext, useState } from 'react'
import TextareaAutosize from "react-textarea-autosize";
import { toast } from "react-toastify";
import { Picker } from 'emoji-mart'

import { FeedContext } from "../../context/FeedContext";
import { uploadImage, client } from '../../utils'

import Button from '../Button/Button'
import Avatar from '../Avatar/Avatar'
import ThemeButton from '../ThemeButton/ThemeButton'
import { Media, Gif, Emoji } from '../icons'

import './BabbleEditor.css'

function BabbleEditor() {
    const { feed, setFeed, tags, setTags } = useContext(FeedContext);

    const [preview, setPreview] = useState("");
    const [postImage, setPostImage] = useState("");
    const [textBabble, setTextBabble] = useState("");
    const [toggleEmoji, setToggleEmoji] = useState(false);

    const handleUploadImage = (e) => {
        if (e.target.files[0]) {
            const reader = new FileReader();

            reader.onload = (e) => {
                setPreview(e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);

            uploadImage(e.target.files[0]).then((res) => {
                setPostImage(res.secure_url);
            });
        }
    };

    const handleSubmitPost = () => {
        if (!textBabble) {
            return toast.error("Please write something");
        }

        const tag = textBabble
            .split(" ")
            .filter((caption) => caption.startsWith("#"))
            .map((val) => val.slice(1, val.length));

        const cleanedCaption = textBabble
            .split(" ")
            .filter((caption) => !caption.startsWith("#"))
            .join(" ");

        setTextBabble("");

        const newPost = {
            caption: cleanedCaption,
            files: [postImage],
            tags: tag,
        };

        client(`/posts`, { body: newPost }).then((res) => {
            const post = res.data;
            post.isLiked = false;
            post.isSaved = false;
            post.isMine = true;
            setFeed([post, ...feed]);
            window.scrollTo(0, 0);
            setPreview('')


            tag.forEach((tg) => {
                if (!tags.includes(tg)) {
                    setTags([tg, ...tags])
                }
            });

            toast.success("Babble posted successfully.");
        });
    };

    const addEmoji = e => {
        let sym = e.unified.split('-')
        let codesArray = []
        sym.forEach(el => codesArray.push('0x' + el))
        let emoji = String.fromCodePoint(...codesArray)
        setTextBabble(textBabble + emoji)
    }
    return (
        <div className="babble-editor">
            <Avatar className="babble-editor--avatar" size='medium' />
            <div className="babble-editor__body">
                {preview && (
                    <img style={{ width: "100%" }} src={preview} alt="preview" />
                )}
                <TextareaAutosize
                    rows="59"
                    placeholder="What's happening?"
                    type="text"
                    onChange={(e) => setTextBabble(e.target.value)}
                    value={textBabble}
                />
                <div className="babble-editor__body--secondary">

                    <div className="babble-editor__body--icons">

                        <label htmlFor="file-input" style={{ cursor: "pointer" }}>
                            <Button icon style={{ pointerEvents: "none" }} >
                                <Media />
                            </Button>
                        </label>
                        <input id="file-input" accept="image/*" type="file" onChange={handleUploadImage} />

                        <label htmlFor="file-input" style={{ cursor: "pointer" }}>
                            <Button icon style={{ pointerEvents: "none" }} >
                                <Gif />
                            </Button>
                        </label>

                        <div style={{ position: 'relative' }}>
                            <Button icon onClick={() => setToggleEmoji(!toggleEmoji)}  >
                                <Emoji />
                            </Button>
                            {toggleEmoji && <Picker onSelect={addEmoji} style={{ position: 'absolute', top: '20px', left: '20px' }} />}
                        </div>
                    </div>
                    <ThemeButton primary onClick={handleSubmitPost}>Babble</ThemeButton>
                </div>
            </div>
        </div>
    )
}

export default BabbleEditor
