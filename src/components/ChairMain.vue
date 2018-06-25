<template>
  <div>
    <a-scene embedded>
      <a-assets>
        <a-asset-item id="assem3-gltf" :src="obj"></a-asset-item>
      </a-assets>

      <a-entity position="0.0 0.0 -3.0">

        <a-plane position="0.0 0.0 0.0"
                 rotation="-90 0 0"
                 width="40"
                 height="40"
                 material="opacity: 0.0; transparent: true"></a-plane>

        <a-entity gltf-model="#assem3-gltf"
                  scale="2.0 2.0 2.0"
                  position="1.0 0.0 0.0"
                  color="#EF2D5E"
                  shadow="cast:true; receive:true;"
                  rotation="90 270 0"></a-entity>

        <a-entity  light="type: directional; color: #FFF; intensity: 0.6" position="-0.5 1 1"></a-entity>

        <a-sky :src="sky"></a-sky>

      </a-entity>
    </a-scene>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sky: 'static/assets/sky.jpg',
      obj: 'static/assets/Assem3.gltf'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
