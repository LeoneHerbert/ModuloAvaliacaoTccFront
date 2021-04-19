<template>
  <div class="col-12 col-lg-6 mb-4">
    <div class="card border-light shadow-sm">
      <div
        class="card-header border-bottom border-light d-flex justify-content-between"
      >
        <h2 class="h5 mb-0">Team members</h2>
        <a href="#" class="btn btn-sm btn-secondary">See all</a>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush list my--3">
          <li class="list-group-item px-0">
            <div class="row align-items-center">
              <div class="col-auto">
                <a href="#" class="user-avatar"
                  ><img
                    class="rounded-circle"
                    alt="Image placeholder"
                    src="@/assets/img/profile-picture-1.jpg"
                /></a>
              </div>
              <div class="col-auto ms--2">
                <h4 class="h6 mb-0"><a href="#!">Chris Wood</a></h4>
                <span class="text-success">●</span> <small>Online</small>
              </div>
              <div class="col text-right">
                <a href="#" class="btn btn-sm btn-tertiary float-end"
                  ><i class="fas fa-calendar-check me-1"></i> Invite</a
                >
              </div>
            </div>
          </li>
          <li class="list-group-item px-0">
            <div class="row align-items-center">
              <div class="col-auto">
                <a href="#" class="user-avatar"
                  ><img
                    class="rounded-circle"
                    alt="Image placeholder"
                    src="@/assets/img/profile-picture-2.jpg"
                /></a>
              </div>
              <div class="col-auto ms--2">
                <h4 class="h6 mb-0"><a href="#!">Jose Leos</a></h4>
                <span class="text-warning">●</span> <small>In a meeting</small>
              </div>
              <div class="col text-right">
                <a href="#" class="btn btn-sm btn-tertiary float-end"
                  ><i class="fas fa-comment me-1"></i> Message</a
                >
              </div>
            </div>
          </li>
          <li class="list-group-item px-0">
            <div class="row align-items-center">
              <div class="col-auto">
                <a href="#" class="user-avatar"
                  ><img
                    class="rounded-circle"
                    alt="Image placeholder"
                    src="@/assets/img/profile-picture-3.jpg"
                /></a>
              </div>
              <div class="col-auto ms--2">
                <h4 class="h6 mb-0"><a href="#!">Bonnie Green</a></h4>
                <span class="text-danger">●</span> <small>Offline</small>
              </div>
              <div class="col text-right">
                <a href="#" class="btn btn-sm btn-tertiary float-end"
                  ><i class="fas fa-calendar-check me-1"></i> Invite</a
                >
              </div>
            </div>
          </li>
          <li class="list-group-item px-0">
            <div class="row align-items-center">
              <div class="col-auto">
                <a href="#" class="user-avatar"
                  ><img
                    class="rounded-circle"
                    alt="Image placeholder"
                    src="@/assets/img/profile-picture-4.jpg"
                /></a>
              </div>
              <div class="col-auto ms--2">
                <h4 class="h6 mb-0"><a href="#">Neil Sims</a></h4>
                <span class="text-success">●</span> <small>Online</small>
              </div>
              <div class="col text-right">
                <a href="#" class="btn btn-sm btn-tertiary float-end"
                  ><i class="fas fa-comment me-1"></i> Message</a
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.user-avatar {
  height: 2.5rem;
  width: 2.5rem;
  min-height: 2.5rem;
  min-width: 2.5rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  border-radius: 50%;

  & .rounded-circle {
    border-radius: 50% !important;
  }

  img {
    max-width: 100%;
  }
  img,
  svg {
    vertical-align: middle;
  }
}

.text-action,
a {
  color: #262b40;
  transition: all 0.2s ease;
}

.btn-tertiary {
  color: #fff;
  background-color: #2ca58d;
  border-color: #2ca58d;
}
</style>
