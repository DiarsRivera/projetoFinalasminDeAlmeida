const app = require('./src/app');
const PORT = process.env.PORT

app.listen(PORT, () => 
console.log(`servidor tá na porta ${PORT} :D`));