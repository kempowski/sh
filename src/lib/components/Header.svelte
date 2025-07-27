<script lang='ts'>
    import Logo from "./Logo.svelte";
</script>

<div class="flex justify-center items-center md:justify-between">
    <Logo></Logo>
    <ul class="mr-9 [&>*]:mr-4 hidden md:flex">
        <li>
            <a href="/work">
                <img src="/work.png" alt="">
            </a>
        </li>
        <li>
            <a href="/about">
                <img src="/about.png" alt="">
            </a>
        </li>
        <li>
            <a href="/contact">
                <img src="/contact.png" alt="">
            </a>
        </li>
    </ul>
    <ul class="absolute top-5 right-5 md:hidden">
        <li class="w-10 h-1 bg-black mb-2"></li>
        <li class="w-10 h-1 bg-black mb-2"></li>
        <li class="w-10 h-1 bg-black mb-2"></li>
    </ul>
    <ul class="hidden h-screen absolute inset-0 center flex flex-col justify-center *:flex *:row *:justify-center">
        <!-- <li class="w-screen h-full bg-whit -->
        <li>
            <a href="/work">
                <img src="/work.png" alt="">
            </a>
        </li>
        <li>
            <a href="/about">
                <img src="/about.png" alt="">
            </a>
        </li>
        <li>
            <a href="/contact">
                <img src="/contact.png" alt="">
            </a>
        </li>
    </ul>
</div>