import { Trash, ThumbsUp } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        console.log('delete comment');
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        });
    }

    return (
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/53489752?v=4" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Leslie Alexander</strong>
                            <time className="">Publicado há 1 dia</time>
                        </div>
                        <button
                            onClick={handleDeleteComment}
                            className="">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p className="">{content}</p>
                </div>
                <footer>
                    <button
                        onClick={handleLikeComment}
                        type='submit'
                        className="">
                        <ThumbsUp size={20} />
                        Aplaudir
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}