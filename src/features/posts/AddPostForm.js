import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/userSlice";
import { addNewPost } from "./postsSlice";

const AddPostForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");

    const [content, setContent] = useState("");

    const [userId, setUserId] = useState("");

    const onTitleChanged = (e) => setTitle(e.target.value);
    // console.log(title);

    const onContentChanged = (e) => setContent(e.target.value);

    const onAuthorChanged = (e) => setUserId(e.target.value);
    const [addRequestStatus, setAddRequestStatus] = useState('idle')


    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

    const onSavePostClicked = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending')
                dispatch(addNewPost({ title, body: content, userId })).unwrap()

                setTitle('')
                setContent('')
                setUserId('')
            } catch (err) {
                console.error('Failed to save the post', err)
            } finally {
                setAddRequestStatus('idle')
            }
        }

    }

    const users = useSelector(selectAllUsers);

    const usersOptions = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));


    return (
        <section>
            <h2>📝 일정 공유 하기</h2>
            <form>
                <label htmlFor="postTitle">제목:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postAuthor">사용자:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>
                <label htmlFor="postContent">내용</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
                    저장하기
                </button>
            </form>
        </section>
    );
};

export default AddPostForm;
