import {pb} from "$lib/db"


export const load = async () => {

    const works = await pb.collection('work').getFullList({
        sort: '-created'
    })

	return {
        works
	}
}


