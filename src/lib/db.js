import PocketBase from 'pocketbase'
import { url } from "$lib/utils/getURLs"

export const pb = new PocketBase(url);