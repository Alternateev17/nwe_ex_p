const {Router} = require('express');
const axios = require('axios')
const router = Router();

router.get('/', async (req, res) => {

  try {
  const result = await axios
                         .get('https://www.nbrb.by/api/exrates/rates?periodicity=0')
                         .then(res => {
                             return res.data
                             })
                            console.log(result);
                            res.render('index', {
                            title: 'Курс валют',
                            isHome: true,
                            result: result
                          })
                    }
                    catch (err) {
                          console.log(err)
                    }

})


module.exports = router


