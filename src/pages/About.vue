<template>
  <q-page>
    <img class="waver" src="products/wave.png" alt="wave" />

    <!-- content -->
    <i class="fas fa-stream icons_3"></i>
    <i class="fas fa-cloud icons_4"></i>
    <div class="container">
      <h2>About IsomWare</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dolore
        exercitationem magni expedita at eum nulla quaerat assumenda
        repellendus, ipsum minima id officiis beatae esse possimus dolores
        repellat? Debitis perferendis explicabo voluptates, minima, quo minus,
        consequuntur numquam Lorem ipsum dolor sit amet consectetur adipisicing
        elit. A, dolore exercitationem magni expedita at eum nulla quaerat
        assumenda repellendus, ipsum minima id officiis beatae esse possimus
        dolores repellat? Debitis perferendis explicabo voluptates, minima, quo
        minus, consequuntur numquam
      </p>
      <div class="tasks row">
        <div class="task_1 col-md-4">
          <i class="fas fa-project-diagram"></i>
          <span>221 <span>Projects</span> </span>
        </div>
        <div class="task_2 col-md-4">
          <i class="fas fa-star"></i>
          <span>19 <span>Evaluation</span> </span>
        </div>
        <div class="task_3 col-md-4">
          <i class="fas fa-comment"></i>
          <span>56 <span>Comments</span> </span>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>

<style scoped>
@media only screen and (min-width: 900px) {
  .container {
    padding-left: 150px;
    padding-right: 150px;
  }
}

.waver {
  width: 100%;
  height: 143px;
  position: absolute;
  top: -142px;
  left: 0;
}
main,
.q-page {
  background: rgb(255, 255, 255);
  min-height: 500px !important;
  text-align: center;
}
h2 {
  font-size: 50px;
  font-weight: 600;
  font-family: Tahoma, Geneva, Verdana, sans-serif;
  color: var(--color_3);
  padding-top: 40px;
  font-weight: bold;
}
.tasks {
  display: flex;
  justify-content: space-between;
  padding: 40px 100px 30px;
}
.tasks .task_1,
.tasks .task_2,
.tasks .task_3 {
  width: 200px;
  padding: 10px 20px;
  margin-top: 5px;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
}
.tasks .task_1 {
  background-color: var(--color_1);
}
.tasks .task_2 {
  background-color: var(--color_2);
}
.tasks .task_3 {
  background-color: var(--color_3);
}
i {
  font-size: 25px;
}
span {
  font-size: 20px;
  padding: 5px;
}

.icons_3 {
  font-size: 100px;
  position: absolute;
  z-index: 3;
  color: rgba(0, 0, 0, 0.603);
  opacity: 0.5;
  left: 20px;
  top: -70px;
  transform: rotate(-30deg);
}
.icons_4 {
  font-size: 100px;
  position: absolute;
  z-index: 6;
  color: rgba(0, 0, 0, 0.842);
  opacity: 0.2;
  right: 20px;
  top: 74%;
  transform: rotate(128deg);
}
</style>
