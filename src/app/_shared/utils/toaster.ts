import { ToastAndroid } from 'react-native';

export function showToastMessage(message: string): void {
    ToastAndroid.show(message, ToastAndroid.SHORT);
}
