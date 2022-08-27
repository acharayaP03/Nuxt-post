<template>
  <div class="form-comments">
    <form class="form-mf">
      <div class="row">
        <div class="col-md-12 mb-3">
          <div class="form-group">
            <input
              id="inputName"
              type="text"
              class="form-control input-mf p-4"
              placeholder="Title *"
              required
            />
          </div>
        </div>
        <div class="col-md-12 mb-3">
          <div class="form-group">
            <input
              id="inputUrl"
              type="text"
              class="form-control input-mf p-4"
              placeholder="Author"
            />
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <textarea
              id="textMessage"
              class="form-control input-mf p-4"
              placeholder="Content *"
              name="message"
              cols="45"
              rows="8"
              required
            ></textarea>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreatePostForm"
}
</script>

<style scoped>

</style>
