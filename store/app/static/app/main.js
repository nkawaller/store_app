// Vue Instance

cartPage = new Vue({
    delimiters: ['[[', ']]'],
    el: '#cartPage',
    data: {
        message: 'Cart:',
        items: [],
        totals: "",
        preferred: "",
    },
    methods: {
        deleteCartItem: function(id) {
              const url = "/api/cart/" + id + "/";
              axios.delete(url)
                  .then(response => {
                      console.log(response)
                  });
        },

    },
    computed: {

    },
    mounted:
    function (){
        axios.get('/api/cart/')
            .then(response => {
            this.items = response.data
            });
        axios.get('/api/totals/')
            .then(response => {
            this.totals = response.data
            });
    },
})

userProfile = new Vue({
    delimiters: ['[[', ']]'],
    el: '#userProfile',
    data: {
        message: 'Account',
        info: [],
    },
    mounted() {
        axios
            .get('/api/profile')
            .then(response => (this.info = response.data))
    }
})