<template>
  <div class="chair-design-picker">
  <el-col>
  <el-collapse v-model="activeName" @change="handleChange">
    <el-collapse-item title="Base" name="1">
      <div class="base-array">
        <div class="base-container">
          <img class="base-image" src="../assets/Base 2.png"/>
        </div>
        <div class="base-container">
          <img class="base-image" src="../assets/Base 2.png"/>
        </div>
        <div class="base-container">
          <img class="base-image" src="../assets/Base 1.png"/>
        </div>
        <div class="base-container">
          <img class="base-image" src="../assets/Base 1.png"/>
        </div>
        <div class="base-container">
          <img class="base-image" src="../assets/Base 1.png"/>
        </div>
        <div class="base-container">
          <img class="base-image" src="../assets/Base 1.png"/>
        </div>
        <div class="base-container">
          <img class="base-image" src="../assets/Base 2.png"/>
        </div>
        <div class="base-container">
          <img class="base-image" src="../assets/Base 1.png"/>
        </div>
        <div class="base-container">
          <img class="base-image" src="../assets/Base 1.png"/>
        </div>
      </div>
    </el-collapse-item>
    <el-collapse-item title="Base finish" name="2">
      <div class="circle-container">
        <div class="circle" style="background-color:#0D0D0D;"></div>
        <div class="circle" style="background-color:#00334D;"></div>
        <div class="circle" style="background-color:#FFFFFF;"></div>
        <div class="circle" style="background-color:#B7B7B7;"></div>
        <div class="circle" style="background-color:#717184;"></div>
        <div class="circle" style="background-color:#BCB5AF;"></div>
        <div class="circle" style="background-color:#0068B4;"></div>
        <div class="circle" style="background-color:#6D6456;"></div>
        <div class="circle" style="background-color:#D0D1B0;"></div>
        <div class="circle" style="background-color:#414042;"></div>
        <div class="circle" style="background-color:#7A7A7A;"></div>
        <div class="circle" style="background-color:#CEDBBC;"></div>
      </div>
    </el-collapse-item>
    <el-collapse-item title="Board" name="3">
      <div class="square-array">
        <div class="square-container">
          <img class="square-image" src="../assets/mat1.png"/>
        </div>
        <div class="square-container">
          <img class="square-image" src="../assets/mat2.png"/>
        </div>
        <div class="square-container">
          <img class="square-image" src="../assets/mat3.png"/>
        </div>
        <div class="square-container">
          <img class="square-image" src="../assets/mat4.png"/>
        </div>
      </div>
    </el-collapse-item>
    <el-collapse-item title="Seating" name="4">
      <div class="square-array">
        <div class="square-container">
          <img class="square-image" src="../assets/mat1.png"/>
        </div>
        <div class="square-container">
          <img class="square-image" src="../assets/mat2.png"/>
        </div>
        <div class="square-container">
          <img class="square-image" src="../assets/mat3.png"/>
        </div>
        <div class="square-container">
          <img class="square-image" src="../assets/mat4.png"/>
        </div>
      </div>
    </el-collapse-item>
    <el-collapse-item title="Covering" name="5">
      <div class="square-array">
        <div class="square-container">
          <img class="square-image" src="../assets/mat5.png"/>
        </div>
        <div class="square-container">
          <img class="square-image" src="../assets/mat6.png"/>
        </div>
        <div class="square-container">
          <img class="square-image" src="../assets/mat7.png"/>
        </div>
        <div class="square-container">
          <img class="square-image" src="../assets/mat8.png"/>
        </div>
      </div>
    </el-collapse-item>
    <el-collapse-item title="Back" name="6">
      <div class="square-array">
        <div class="square-container">
          <img class="square-image" src="../assets/mat1.png"/>
        </div>
        <div class="square-container">
          <img class="square-image" src="../assets/mat2.png"/>
        </div>
        <div class="square-container">
          <img class="square-image" src="../assets/mat3.png"/>
        </div>
        <div class="square-container">
          <img class="square-image" src="../assets/mat4.png"/>
        </div>
      </div>
    </el-collapse-item>
  </el-collapse>
  </el-col>
  <el-col>
    <h3 class="pricing-count">Selling price of your current configuration: <br> {{price}} EUR </h3>
  </el-col>
  <el-col>
    <div class="btn-container">
      <div class="btn-nav" @click="goToPrevious">Previous</div>
      <div class="btn-nav" @click="goToNext">Next</div>
    </div>
  </el-col>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: '1',
      price: 300
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    },
    goToNext () {
      var activeNameString = parseInt(this.activeName) + 1
      if (activeNameString === 8) {
        activeNameString = 7
      }
      console.log(activeNameString)
      this.activeName = String(activeNameString)
    },
    goToPrevious () {
      var activeNameString = parseInt(this.activeName) - 1
      if (activeNameString === 0) {
        activeNameString = 1
      }
      console.log(activeNameString)
      this.activeName = String(activeNameString)
    }
  }
}
</script>

<style lang="scss" scoped>
  .circle-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    .circle {
      min-width: 3.5em;
      min-height: 3.5em;
      width: 3.5em;
      height: 3.5em;
      margin: 1.5em 1.5em;
      border-radius: 50%;
      border: 1px solid grey;
    }
  }
  .base-array {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    .base-container {
      min-width: 3.5em;
      min-height: 3.5em;
      width: 10em;
      height: 8em;
      margin: 1.5em 3em;
      border-radius: 5%;
      border: solid 2px grey;
      .base-image {
        width: 100%;
        height: 100%;
      }
    }
  }
  .square-array {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    .square-container {
      min-width: 3.5em;
      min-height: 3.5em;
      width: 10em;
      height: 8em;
      margin: 1.5em 3em;
      border-radius: 5%;
      border: solid 2px grey;
      .square-image {
        width: 100%;
        height: 100%;
      }
    }
  }
  h3 {
    padding: 1em 0;
    font-weight: 500;
    color: grey;
    font-family: 'Roboto Slab', serif;
  }
  .btn-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    .btn-nav {
      width: 40%;
      margin: 1em 5%;
      padding: 1.5em 0;
      text-align: center;
      background-color: #414042;
      border-radius: 2px;
      font-family: 'Helvetica Neue';
      color: white;
      justify-content: center;
      align-items: center;
      display: flex;
      font-size: 1.2em;
      &:hover {
        background-color: rgba(#414042,0.8);
      }
      &:active {
        background-color: #464646
      }
    }
  }
</style>
