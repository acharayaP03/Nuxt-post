<template>
    <div class="widget-sidebar sidebar-search">
        <div class="sidebar-content">
            <form>
            <div class="input-group p-2">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Search for..."
                    aria-label="Search for..."
                />
                <span class="input-group-btn">
                <button
                    class="btn btn-secondary btn-search"
                    type="button"
                >
                    <span class="bi bi-search"></span>
                </button>
                </span>
            </div>
            </form>
        </div>
        </div>
</template>
<script>
    export default {
        name: 'SearchBar',
        data(){
            return {

            }
        }
    }
</script>
