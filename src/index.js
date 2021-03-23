const app = require("./app");
//settings
app.set('port', process.env.PORT || 5000);
const PORT = app.get('port');

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
});