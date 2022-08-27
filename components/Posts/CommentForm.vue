<template>
    <div class="form-comments">
        <div class="title-box-2">
            <h3 class="title-left">Leave a Reply</h3>
        </div>
        <form class="form-mf">
            <div class="row">
            <div class="col-md-6 mb-3">
                <div class="form-group">
                  <input
                      id="inputName"
                      type="text"
                      class="form-control input-mf"
                      placeholder="Name *"
                      required
                  />
                </div>
            </div>
            <div class="col-md-6 mb-3">
                <div class="form-group">
                  <input
                      id="inputEmail1"
                      type="email"
                      class="form-control input-mf"
                      placeholder="Email *"
                      required
                  />
                </div>
            </div>
            <div class="col-md-12 mb-3">
                <div class="form-group">
                  <input
                      id="inputUrl"
                      type="url"
                      class="form-control input-mf"
                      placeholder="Website"
                  />
                </div>
            </div>
              <div class="col-md-12 mb-3">
                  <div class="form-group">
                  <textarea
                      id="textMessage"
                      class="form-control input-mf"
                      placeholder="Comment *"
                      name="message"
                      cols="45"
                      rows="8"
                      required
                  ></textarea>
                  </div>
              </div>
              <div class="col-md-12">
                  <button
                  type="submit"
                  class="button button-a button-big button-rouded"
                  >
                  Send Message
                  </button>
              </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'CommentFrom',
    data(){
        return{

        }
    }

}
</script>
