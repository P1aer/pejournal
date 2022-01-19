import React, {useState} from 'react';
import {Button, Input} from "@material-ui/core";
import styles from './write-form.module.scss';
import dynamic from "next/dynamic";
import {Api} from "../../utils/api";
import {PostItem} from "../../utils/api/types";
import {useRouter} from "next/router";

const Editor = dynamic(():any => import('../editor').then(m => m.Editor), { ssr: false })

interface WriteFormProps {
    data?: PostItem;
}

export const WriteForm: React.FC<WriteFormProps> = ({data}) => {
    const router = useRouter()
    const [load, setLoad] = useState(false)
    const [title, setTitle] = useState(data?.title || '')
    const [blocks, setBlocks] = useState(data?.body || [])
    const onSubmit = async () => {
        try {
            setLoad(true)
            const obj = {
                title, body: blocks
            }
            if (!data) {
               const post = await Api().post.create(obj)
                await router.push(`/write/${post.id}`)
            }
            else {
                await Api().post.update(data.id, obj)
            }
        }
        catch (e) {

        }
        finally {
            setLoad(false)
        }

    }
    return (
        <div>
            <Input classes={{ root: styles.titleField }} placeholder="Заголовок" value={title}
            onChange={e =>setTitle(e.target.value)}/>
            <div className={styles.editor}>
                {
                    // @ts-ignore
                    <Editor initialBlocks={data?.body} onChangeBlocks={(bl) => setBlocks(bl)}/>
                }
            </div>
            <Button disabled={load || !blocks.length || !title} onClick={onSubmit} variant="contained" color="primary">
                {!data ? 'Опубликовать' : "Сохранить"}
            </Button>
        </div>
    );
};
