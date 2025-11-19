import express from 'express';
import bodyParser from 'body-parser';
import { connection } from './database/database.js';
import { askModel } from './database/Ask.js';
import { responsesModel } from './database/Responses.js';

const app = express();

//CONECTION WITH DATABASES
connection.authenticate()
.then(() =>{
  console.log('Conexão Feita com o banco de dados')
})
.catch((err) =>{
  console.log(err)
})

// Sets EJS as the template engine used to render dynamic views
app.set('view enginer', 'ejs');
// Serves static files (CSS, images, JS) from the "public" directory
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    askModel.findAll({raw: true, order:[
      ['id', 'DESC'] // ASC == Crescente || DESC ==  Decrecente
    ]}).then(asks =>{
      res.render('index.ejs', {
        asks
      })
    })
});

app.get('/ask', (req,res) =>{
  res.render('ask.ejs');
});

app.post('/savetheasks', (req,res) => {
  const{ title, description } = req.body;

  askModel.create({
    title: title,
    description: description
  }).then(() =>{
    res.redirect('/')
  })
 
})

app.get('/ask/:id', (req,res) => {
  const id = req.params.id;

  askModel.findOne({
    where: { id: id }
  }).then(ask =>{
    if(ask != undefined){
      res.render('ask-card.ejs',{
        ask:ask
      })
    }else{
      res.redirect('/')
    }
  })
});

app.listen(8080, (err) => {  
  if (err) {
    console.log(err);
  } else {
    console.log(`SERVER RUNNING SUCCESS IN PORT: 8080✅`);
  }
})