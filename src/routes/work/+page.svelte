<script lang="ts">
    import { url, getImageURL } from '$lib/utils/getURLs';
    
    let { data } = $props();

    console.log(data)

    let works = data['works']

    let filters:string[] = ['Illustration', 'Book', 'Graphic Design', 'Webdesign'] 

    let selected = $state('all')

 

</script>

<div class="flex ml-9 mb-9">
    {#each filters as filter}
        <button class="mr-4" onclick={() => { selected = filter }}>{filter}</button>
    {/each}
    {#if selected !== 'all'}
        <button onclick={() => { selected = 'all' }} > x </button>
    {/if}
</div>


<ul class="flex gap-4">
    {#each works as work}
        {#if work.field.includes(selected) || selected == 'all'}
            <li class="relative w-2/3">
                <a href="/work/{work.id}.html">
                    <img src="{url}{getImageURL(work.collectionId, work.id, work.thumbnail)}" alt="">
                    <h3 class="absolute inset-0 opacity-0">
                        {work.titel}
                    </h3>
                </a>
            </li>
            
        {/if}
    {/each}
</ul>

