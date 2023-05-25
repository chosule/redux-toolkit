import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/userSlice";
const AddPostForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");

    const [content, setContent] = useState("");

    const [userId, setUserId] = useState("");

    const onTitleChanged = (e) => setTitle(e.target.value);
    console.log(title);

    const onContentChanged = (e) => setContent(e.target.value);

    const onAuthorChanged = (e) => setUserId(e.target.value);

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postAdded(title, content, userId));
            setTitle("");
            setContent("");
        }
    };

    const users = useSelector(selectAllUsers);

    const usersOptions = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
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
