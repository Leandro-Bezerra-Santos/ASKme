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
app.set('views', './views');
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
      responsesModel.findAll({
        where:{
          askId: ask.id
        }, order: [ ['id', 'DESC']]
      }).then(responses =>{
        res.render('ask-card.ejs',{
        ask:ask,
        responses: responses
      })
      })
    }else{
      res.redirect('/')
    }
  })
});

app.post('/responses', (req, res) =>{
  const body = req.body.body;
  const askId = req.body.askId;

  if(body != ''){
    responsesModel.create({
      body: body,
      askId: askId
    }) .then( () => {
        res.redirect(`/ask/${askId}`);
    })
  }else{
    res.redirect(`/alert?askId=${askId}`);
  }
   
})

// Rota da tela de alerta
app.get('/alert', (req, res) => {
  const askId = req.query.askId;
  res.render('alert.ejs', { askId });
});

app.listen(8080, (err) => {  
  if (err) {
    console.log(err);
  } else {
    console.log(`SERVER RUNNING SUCCESS IN PORT: 8080✅`);
  }
})