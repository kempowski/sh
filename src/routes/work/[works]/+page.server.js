import {pb} from "$lib/db"

export const load = async ( { params }) => {
    console.log(params)
    const id = params.works.split('.')[0];
    const work = await pb.collection('work').getOne(id, {
        expand: 'relField1,relField2.subRelField',
    });

	return {
        work
	}
}