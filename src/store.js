import {writable} from 'svelte/store';

let isLoggedIn = writable(false);
let userName = writable('');

export {isLoggedIn, userName}
