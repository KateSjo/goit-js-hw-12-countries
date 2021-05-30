import { error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

const callError = () => {
    const myError = error({
        title: 'Please check if it is entered correctly!',
        sticker: false,
    });
}
export default callError