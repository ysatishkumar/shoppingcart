var Product = require('../models/product');
var mongoose=require('mongoose');
 var Promise=require('bluebird');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/shopping',{ useMongoClient: true });


var products= [ 
  new Product({
  imagePath:'http://lorempixel.com/300/400',
  title:'lorem image1',
  description:'nice image !!!!!!',
  price:70

}),
new Product({
  imagePath:'http://lorempixel.com/300/400',
  title:'lorem image2',
  description:'good product !!!!!!',
  price:30

}),
new Product({
  imagePath:'http://lorempixel.com/300/400',
  title:'lorem image3',
  description:'nice product image !!!!!!',
  price:60

}),

new Product({
  imagePath:'http://lorempixel.com/300/400',
  title:'lorem image4',
  description:'awesome product!!!!!!',
  price:50

}),
new Product({
  imagePath:'http://lorempixel.com/300/400',
  title:'lorem image5',
  description:'awesome product!!!!!!',
  price:50

})
,
new Product({
  imagePath:'http://lorempixel.com/300/400',
  title:'lorem image6',
  description:'awesome product!!!!!!',
  price:50

})
,
new Product({
  imagePath:'http://lorempixel.com/300/400',
  title:'lorem image7',
  description:'awesome product!!!!!!',
  price:50

})

];

var done=0;
for(var i=0;i<products.length;i++){
  products[i].save(function(err,results){
    done++;
    if(done===products.length)
    {
      exit();
    }
  });
}

function exit()
{

  mongoose.disconnect();
}