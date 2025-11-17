import express from 'express';
const app = express();


// Sets EJS as the template engine used to render dynamic views
app.set('view enginer', 'ejs');

app.get('/', (req, res) => {
    let name = "Leandro";
    let favoriteLanguage = 'NodeJS';

    res.render('index.ejs',{
        name,
        favoriteLanguage
    });
});

app.listen(8080, (err) => {  
  if (err) {
    console.log(err);
  } else {
    console.log('SERVER RUNNING SUCCESS ✅');
  }
})