App = {
    load: async () => {
        // Load app...
        console.log('app loading....')
        await App.loadWeb3();
    },
}

$(() => {
    $(window).load(() => {
        App.load()
    })
})
