import { ImageEditor } from './image-editor';
import { ImageEditorBackupManager } from './image-editor-backup-manager';

const imageEditor = new ImageEditor('/media/imagem.png', 'png');
const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo('gif');

backupManager.backup();
imageEditor.convertFormatTo('png');

backupManager.backup();
imageEditor.convertFormatTo('svg');

console.log(imageEditor);

backupManager.undo();

console.log(imageEditor);

backupManager.undo();

console.log(imageEditor);

backupManager.undo();

console.log(imageEditor);

backupManager.undo();

console.log(imageEditor);
