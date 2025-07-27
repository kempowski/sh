import {pb} from "$lib/db"


export const load = async () => {

    const start = await pb.collection('startPage').getFullList({
        sort: '-created'
    })

	return {
        start
	}
}


