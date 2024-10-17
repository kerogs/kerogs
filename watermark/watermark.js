document.addEventListener('DOMContentLoaded', () => {
    // watermark
    let watermark = document.querySelector("#watermark-ksjs");
    watermark.innerHTML = `
    

        <style>
    .kerogs-watermark {
        position: fixed;
        left: 20px;
        top: 20px;
        z-index: 999999999999;
        gap: 10px;
        font-size: 12px;
        
        border-radius: 100%;
        
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        display: flex;
    }
        
    .kerogs-watermark{
        opacity: .8;
        transition: .2s;
    }
        
    .kerogs-watermark:hover{
        opacity: 1;
        transform: scale(1.1);
    }
        
    .kerogs-watermark img{
        width: 30px;
        height: 30px;
        object-fit: contain;
    }
</style>
<div class="kerogs-watermark">
    <a href="https://github.com/kerogs">
        <img src="https://raw.githubusercontent.com/kerogs/iconpack/refs/heads/main/logo_dark.svg" alt="">
    </a>
</div>

`;
});