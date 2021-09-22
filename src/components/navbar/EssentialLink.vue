<template>
  <div class="lt-md col-md-6">
    <q-btn color="black" icon="menu" flat dense round>
      <q-menu content-class=" text-white menu" auto-close>
        <q-list style="width: 250px">
          <q-item clickable>
            <q-item-section>
              <a href="/home"> <q-icon name="home" /> Home </a>
            </q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>
              <a href="/About"> <q-icon name="style" /> About </a>
            </q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>
              <a href="/Project"> <q-icon name="work" /> Project </a>
            </q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>
              <a href="/Contact"> <q-icon name="phone" /> Contact Us </a>
            </q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
</template>
