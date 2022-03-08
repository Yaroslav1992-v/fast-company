import { orderBy } from "lodash";
import React, { useEffect } from "react";
import CommentsList, { AddCommentForm } from "../common/comments";
import {
    addComment,
    deleteComment,
    getComments,
    getCommentsLoadingStatus,
    loadCommentsList
} from "../../store/comments";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { getCurrentUserId } from "../../store/users";

const Comments = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const currentUserId = useSelector(getCurrentUserId());
    const comments = useSelector(getComments());
    useEffect(() => {
        dispatch(loadCommentsList(userId));
    }, [userId]);
    const isLoading = useSelector(getCommentsLoadingStatus());
    const handleSubmit = (data) => {
        const comment = {
            ...data,
            _id: nanoid(),
            pageId: userId,
            created_at: Date.now(),
            userId: currentUserId
        };
        dispatch(addComment(comment));
        // api.comments
        //     .add({ ...data, pageId: userId })
        //     .then((data) => setComments([...comments, data]));
    };
    const handleRemoveComment = (id) => {
        dispatch(deleteComment(id));
        // api.comments.remove(id).then((id) => {
        //     setComments(comments.filter((x) => x._id !== id));
        // });
    };
    const sortedComments = orderBy(comments, ["created_at"], ["desc"]);

    return (
        <>
            <div className="card mb-2">
                {" "}
                <div className="card-body ">
                    <AddCommentForm onSubmit={handleSubmit} />
                </div>
            </div>
            {sortedComments.length > 0 && (
                <div className="card mb-3">
                    <div className="card-body ">
                        <h2>Comments</h2>
                        <hr />
                        {!isLoading ? (
                            <CommentsList
                                comments={sortedComments}
                                onRemove={handleRemoveComment}
                            />
                        ) : (
                            "loading..."
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Comments;
