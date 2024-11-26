<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Header -->
    <q-header elevated :class="headerClass">
      <q-toolbar>
        <!-- Menu Button -->
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <!-- Title -->
        <q-toolbar-title>
          Garima's YT
        </q-toolbar-title>

        <!-- Search Icon -->
        <q-btn
          flat
          dense
          round
          icon="search"
          aria-label="Search"
          class="q-ml-md"
          @click="search"
        />


        <q-btn
          flat
          dense
          round
          icon="account_circle"
          aria-label="Account"
          @click="toggleProfileDialog"
        />
      </q-toolbar>
    </q-header>

    <!-- Drawer -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="600"
    >
      <q-scroll-area class="fit" >
        <q-list padding>
          <q-item
            to="/"
            clickable
            v-ripple
            :class="{ 'active-item': isActive('/') }"
            @click="navigate('/')"
          >
            <q-item-section>
              Home
            </q-item-section>
          </q-item>


          <q-item
            to="/fav"
            clickable
            v-ripple
            :class="{ 'active-item': isActive('/fav') }"
            @click="navigate('/fav')"
          >
            <q-item-section>
              Favorites
            </q-item-section>
          </q-item>

          <q-item
            to="/explore"
            clickable
            v-ripple
            :class="{ 'active-item': isActive('/explore') }"
            @click="navigate('/explore')"
          >
            <q-item-section>
              Explore
            </q-item-section>
          </q-item>

          <q-item
            to="/recommended"
            clickable
            v-ripple
            :class="{ 'active-item': isActive('/recommended') }"
            @click="navigate('/recommended')"
          >
            <q-item-section>
              Recommended
            </q-item-section>
          </q-item>

          <q-btn
            color="primary"
            label="Close Navigation"
            class="close-nav-btn"
            @click="toggleLeftDrawer"
          />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <!-- Page Container -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-dialog v-model="isProfileDialogOpen" persistent>
      <q-card class="user-profile-card">
    <q-card-section>
      <div class="text-h6 q-mb-md text-center">User Profile</div>

      <div class="profile-info">
        <div class="profile-item">
          <q-icon name="person" class="profile-icon" />
          <div class="profile-details">
            <p><strong>Name:</strong> Garima Pandey</p>
          </div>
        </div>
        <div class="profile-item">
          <q-icon name="call" class="profile-icon" />
          <div class="profile-details">
            <p><strong>Phone no.:</strong> 8299472883</p>
          </div>
        </div>
        <div class="profile-item">
          <q-icon name="star" class="profile-icon" />
          <div class="profile-details">
            <p><strong>Interest:</strong> Development</p>
          </div>
        </div>
      </div>
    </q-card-section>
    <q-card-actions>
      <q-btn flat label="Close" @click="toggleProfileDialog" class="close-btn" />
    </q-card-actions>
  </q-card>
    </q-dialog>
    <q-btn
      icon="add"
      color="primary"
      round
      class="fixed-add-btn"
      @click="handleAddClick"
    />
  </q-layout>
</template>
<script>
export default {
  data() {
    return {
      leftDrawerOpen: false,
      miniState: true,
      isProfileDialogOpen: false,
      headerTitle: "Garima's YT"
    }
  },
  computed: {
    headerClass() {
      return this.$q.dark.isActive ? 'bg-primary' : 'bg-primary'
    },
    drawerClass() {
      return this.$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'
    }
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },
    navigate(path) {
      this.$router.push(path)
      this.toggleLeftDrawer() // Optionally close the drawer after navigation
    },
    isActive(path) {
      return this.$route.path === path
    },
    toggleProfileDialog() {
      this.isProfileDialogOpen = !this.isProfileDialogOpen
    },
    handleClickOutside() {
      if (this.leftDrawerOpen) {
        this.toggleLeftDrawer()
      }
    },
    search() {
      // Add your search logic here
      console.log('Search clicked')
    }
  }
}
</script>
<style scoped>
/* Styles for the active item */
.active-item {
  border-left: 4px solid #007bff; /* Adjust color and width as needed */
  background-color: rgba(0, 123, 255, 0.1); /* Optional: Adjust background color */
}

.close-nav-btn {
  position: fixed;
  bottom: 20px; /* Distance from the bottom of the page */
  left: 20px; /* Distance from the left edge of the page */
  z-index: 1000; /* Ensure the button is above other content */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Optional: add shadow for better visibility */
}

.q-item {
  /* Add some padding or margin adjustments if necessary */
}
.user-profile-card {
  max-width: 400px;
  margin: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.text-h6 {
  font-weight: 600;
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.profile-item {
  display: flex;
  align-items: center;
  gap: 12px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.profile-icon {
  font-size: 24px;
  color: #007bff;
}

.profile-details {
  flex-grow: 1;
}

.close-btn {
  color: #007bff;
}
.fixed-add-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
}
.q-list--padding {
    padding: 0px 0;
}
</style>
