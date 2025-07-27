<script lang='ts'>
    import { url, getImageURL } from '$lib/utils/getURLs';
    export let data
    let work = data.work
    console.log(work.galerie)
</script>


<ul class="flex flex-row-reverse gap-3 mx-10 text-primary justify-center">
    <ul class="flex flex-col gap-3">
        <li>
            <img src="{url}{getImageURL(work.collectionId, work.id, work.thumbnail)}" alt="">
        </li>
        <li>
            <h1 class="text-2xl uppercase">{work.titel}</h1>
        </li>

        {#if work.description.length > 0 }
            <li>
                {@html work.description}
            </li>
        {/if}
    </ul>

    <ul class="flex flex-col gap-5">
        {#each work.galerie as image }
            <li class="">
                <img src="{url}{getImageURL(work.collectionId, work.id, image)}" alt="">
            </li>
        {/each}
    </ul>
</ul>


