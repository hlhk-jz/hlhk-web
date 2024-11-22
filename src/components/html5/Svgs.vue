<template>
    <div>
        <!-- 直接将SVG代码写在模板中 -->
        <svg width="800px"  height="800px" style="background-color: azure">
            <!--<rect width="100" height="100" fill="green"></rect> 矩形-->
          <polygon points="110,10 50,180 200,60 20,60 170,180"
                     style="fill:lime;stroke:purple;stroke-width:1"/>  <!--多边形，五角星-->
         </svg>
    </div>
</template>

<script>
    export default {
        name: "Svgs"
    }
</script>