import {writable} from 'svelte/store';

let isLoggedIn = writable(false);
let userName = writable('');
let email = writable('');
let pictureUrl = writable('');

export {isLoggedIn, userName, email, pictureUrl}
