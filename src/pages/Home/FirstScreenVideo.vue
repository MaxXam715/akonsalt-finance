<script setup>
import Video from "/src/assets/video/FirstScreenVideo.mp4"
</script>

<template>
  <div class="video-container">
    <video controls="false" autoplay muted loop>
      <source :src="Video" type="video/mp4">
    </video>
  </div>
</template>

<style lang="scss" scoped>
.video-container {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 70%;
  height: 80%;
  opacity: 0.3;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.00) 100%), linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.00) 100%);
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>