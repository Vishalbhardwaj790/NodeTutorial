const yargs = require('yargs')

yargs.command({
    command:'addToCart',
    describe : 'Add the new product to the Cart',
    builder : {
        title: {
            describe : "Title of the Product",
            demandOption:true,
            type: "string" 
        }
    },
    handler : function(argv){
        console.log("Title of Product: " + argv.title)
    }
})

yargs.parse()
