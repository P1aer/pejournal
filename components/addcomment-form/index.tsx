import React from 'react';
import Input from '@material-ui/core/Input';
import styles from './addcomment-form.module.scss';
import {Button} from "@material-ui/core"
import {Api} from "../../utils/api";
import {CommentItem} from "../../utils/api/types";

interface AddCommentFormProps {
    postId: number;
    onAdd: (obj:CommentItem) => void
}

export const AddCommentForm: React.FC<AddCommentFormProps> = ({postId,onAdd}) => {
    const [clicked, setClicked] = React.useState(false);
    const [isLoading, setLoad] = React.useState(false);
    const [text, setText] = React.useState('');

    const onAddComment = async () => {
        try {
            setLoad(true)
            const comment = await Api().comment.create({
                postId, text
            })
            onAdd(comment)
            setClicked(false);

            setText('');
        }
        catch (e) {
            console.log(e)
        }
        finally {
            setLoad(false)
        }
    }
    return (
        <div className={styles.form}>
            <Input onChange={e => setText(e.target.value)}
                   value={text}
                   disabled={isLoading}
                   onFocus={() => setClicked(true)}
                   minRows={clicked ? 5 : 1}
                   classes={{ root: styles.fieldRoot }}
                   placeholder="Написать комментарий..."
                   fullWidth
                   multiline />
            {clicked &&
            <Button disabled={isLoading} onClick={onAddComment} className={styles.addButton} variant="contained" color="primary">
                Опубликовать
            </Button>}
        </div>
    )
}
