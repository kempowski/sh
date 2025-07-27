<script lang="ts">
    import { url, getImageURL } from '$lib/utils/getURLs.js';
    export let data
    console.log(data)
   
    let backgroundItem = data['start'][0]
    let collectionID = backgroundItem.collectionId
    let recordID = backgroundItem.id
    let filename = backgroundItem.startImg
    let backgroundImageURL = getImageURL(collectionID, recordID, filename)
    console.log(backgroundImageURL)
</script>

<div class="inset-0 m-auto -z-10 md:h-[72vh] flex justify-center">
    <img src="{url + backgroundImageURL}" alt="">
</div>