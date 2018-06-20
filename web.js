
const express=require('express');
const app=express();
app.use(express.static('public'));
app.listen(2828, () => console.log('Example app listening on port 2828!'));
});
