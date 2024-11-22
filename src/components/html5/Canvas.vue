<template>
    <div style="background-color: #babacb;width: 100%;height: 830px;">
        <canvas ref="canvas" width="500" height="500" style="background-color: bisque"></canvas>
    </div>
</template>

<script>
    export default {
        name: "Canvas",
        mounted() {
            const canvas = this.$refs.canvas;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#FF0000';
            ctx.fillRect(30, 30, 150, 100);


            ctx.fillStyle = '#7cff58';
            ctx.fillRect(50, 50, 150, 100);
            let gradient=ctx.createLinearGradient(0,0,canvas.width,0);
            gradient.addColorStop("0","magenta");
            gradient.addColorStop("0.5","blue");
            gradient.addColorStop("1.0","red");
            ctx.strokeStyle=gradient;
            //设置字体大小要在strokeText上面
            ctx.font="20px Arial";
            ctx.strokeText("Big smile!",90,90);

        }
    }
</script>