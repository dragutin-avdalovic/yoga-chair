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
  html, body {
    padding: 0;
    margin: 0;
    font-style: 'Helvetica Neue';
  }

  .rect {
    float: right;
    width: 30%;
    height: 100vh;
    background-color: white;
    margin-right: 0px;
  }

  a-scene {
    position: absolute;
    top: 0;
    width: 70%;
    height: 100vh;
  }
  #prva {
    margin-top: 20px;
    width: 80%;
    color:lightgray;
  }
  #base {
    font-family: Helvetica Neue;
    margin-top: 20px;
    font-size: 18px;
    height: 50px;
    overflow: hidden;
  }
  #base:hover  {
    height: 140px;
  }

  #base p {
    margin-left: 50px;
    color: gray;
  }
  #base p:hover {
    margin-left: 50px;
    color: black;
  }
  #base .container {
    margin-left: 0px;
    display: flex;
  }

  .kvadrat {
    width: 80px;
    height: 80px;
    margin-left: 50px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

  }
  .kvadrat2 {
    width: 80px;
    height: 80px;
    margin-left: 18px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .kvadrat3 {
    width: 80px;
    height: 80px;
    margin-left: 18px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .kvadrat4 {
    width: 80px;
    height: 80px;
    margin-left: 18px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .baza {
    height: 100%;

  }

  .mat {
    height: 100%;
    width: 100%;

  }

  .container {
    height: 80px;
    display: flex;

  }

  .baza2 {
    position: absolute;
    right: 225px;
  }

  #basefin {
    font-family: Helvetica Neue;
    margin-top: 0px;
    font-size: 18px;
    height: 50px;
    overflow: hidden;
  }
  #basefin:hover  {
    height: 200px;
  }

  #basefin p {
    margin-left: 50px;
    color: gray;
  }
  #basefin p:hover {
    margin-left: 50px;
    color: black;
  }
  #basefin .container {
    margin-left: 50px;
    display: flex;
    flex-direction: column;
  }
  #basefin .container>div {
    display: flex;
    margin: 25px 0;
  }

  .krug {
    width: 40px;
    height: 40px;
    border-radius:40px;
    border: 1px solid lightgray;
    margin-right: 15px;
  }

  .container4 {
    margin-top: 20px;
    justify-content: center;
    align-items: center;
    display: flex;

  }

  .kvadrat5 {
    width: 180px;
    height: 45px;
    background-color: #414042;
    margin-right: 10px;
    border-radius: 2px;
    font-family: Helvetica Neue;
    color: white;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 18px;
  }

  #Selling {
    font-family: Helvetica Neue;
    color: #7E7E7E;
    margin-top: 25px;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 19px;
  }

  #basefin1 {
    font-family: Helvetica Neue;
    margin-top: 0px;
    font-size: 18px;
    height: 50px;
    overflow: hidden;
  }
  #basefin1:hover  {
    height: 140px;
  }

  #basefin1 p {
    margin-left: 50px;
    color: gray;
  }
  #basefin1 p:hover {
    margin-left: 50px;
    color: black;
  }
  #basefin1 .container {
    margin-left: 0px;
    display: flex;
  }

  #basefin2 {
    font-family: Helvetica Neue;
    margin-top: 0px;
    font-size: 18px;
    height: 50px;
    overflow: hidden;
  }
  #basefin2:hover  {
    height: 140px;
  }

  #basefin2 p {
    margin-left: 50px;
    color: gray;
  }
  #basefin2 p:hover {
    margin-left: 50px;
    color: black;
  }
  #basefin2 .container {
    margin-left: 0px;
    display: flex;
  }
  #basefin3 {
    font-family: Helvetica Neue;
    margin-top: 0px;
    font-size: 18px;
    height: 50px;
    overflow: hidden;
  }
  #basefin3:hover  {
    height: 140px;
  }

  #basefin3 p {
    margin-left: 50px;
    color: gray;
  }
  #basefin3 p:hover {
    margin-left: 50px;
    color: black;
  }
  #basefin3 .container {
    margin-left: 0px;
    display: flex;
  }

  #basefin4 {
    font-family: Helvetica Neue;
    margin-top: 0px;
    font-size: 18px;
    height: 50px;
    overflow: hidden;
  }
  #basefin4:hover  {
    height: 140px;
  }

  #basefin4 p {
    margin-left: 50px;
    color: gray;
  }
  #basefin4 p:hover {
    margin-left: 50px;
    color: black;
  }
  #basefin4 .container {
    margin-left: 0px;
    display: flex;
  }
</style>
