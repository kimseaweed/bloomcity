export const resize = {
    data() {
      return {
        width: 0,
        height: 0
      };
    },
    mounted() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize(); // Initialize with the current size
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      handleResize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
      }
    }
  };