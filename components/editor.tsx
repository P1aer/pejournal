import React from 'react';
import EditorJS, {OutputData} from '@editorjs/editorjs';

interface EditorProps {
    onChangeBlocks: (blocks: OutputData['blocks']) => void;
    initialBlocks?: OutputData["blocks"]
}

export const Editor: React.FC<EditorProps> = ( { onChangeBlocks, initialBlocks } ) => {
    React.useEffect(() => {
        const editor = new EditorJS({
            holder: 'editor',
            placeholder: 'Введите текст вашей статьи',
            async onChange() {
                const {blocks} = await editor.save();
               onChangeBlocks(blocks)
            },
            data: {
                blocks: initialBlocks || []
            }
        });

        return () => {
            editor.isReady.then(() => {
                editor.destroy();
            })
                .catch(e => console.error('ERROR editor cleanup', e));
        }
    }, []);

    return (
        <div id="editor" />
    );
};
