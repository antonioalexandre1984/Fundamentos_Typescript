
import styles from './Post.module.css'
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { posts } from '../data'
import { format, formatDistance, subDays } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { ChangeEvent, InvalidEvent, useState } from 'react';

export interface Author {
    avatarUrl: string;
    name: string;
    role: string;
}

export interface PostContent {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostProps {
    author: Author;
    content: PostContent[];
    publishedAt: Date;
}


export function Post({ author, content, publishedAt }: PostProps) {


    const [comments, setComments] = useState([
        'Muito bom esse post',
    ])
    const [newCommentText, setNewCommentText] = useState('')

    const handleCreateNewComment = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
        console.log('new comment', newCommentText)
    }

    const handleNewCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        e.target.setCustomValidity('')
        setNewCommentText(e.target.value)
    }

    function deleteComment(commentToDelete: string) {
        /*   setComments(comments.filter((c) => c !== comment)) */
        const commentWithoutDeleteOne = comments.filter((c) => c !== commentToDelete)
        setComments(commentWithoutDeleteOne)
        console.log('delete comment', `${commentToDelete}`);
    }

    function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
        e.target.setCustomValidity('O comentário não pode ser vazio')
        console.log('invalid', e.target.value)
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr,
    });

    const publishedDateRelativeToNow = formatDistance(subDays(new Date(), 3), new Date(), {
        locale: ptBr,
        addSuffix: true
    })


    return (
        <article className={styles.post}>
            <header className={styles.header}>
                <div className={styles.author}>
                    <img src={author.avatarUrl} alt="" />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map((item, i) => {
                    if (item.type === 'paragraph') {
                        return <p key={i}>{item.content}</p>;
                    } else if (item.type === 'link') {
                        return <p key={i}><a href="#">{item.content}</a></p>;
                    }
                })}
            </div>
            <form
                onSubmit={handleCreateNewComment}
                className={styles.commentForm}>
                <strong className="">
                    Deixe seu feedback
                </strong>
                <textarea
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    name="comment"
                    placeholder="Deixe um comentário aqui"
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer className="">
                    <button
                        type='submit'
                        disabled={isNewCommentEmpty}
                    >
                        Enviar
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map((comment) => {
                    return (
                        <Comment
                            onDeleteComment={deleteComment}
                            key={comment}
                            content={comment} />
                    )
                }
                )}
            </div>

        </article >

    )
}

