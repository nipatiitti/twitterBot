import Twit from 'twit'

async function handleGet(req, res) {
  const {
    consumer_key,
    consumer_secret,
    access_token,
    access_token_secret
  } = req.body
  console.log(req.body)
  if(
    consumer_key
    && consumer_secret
    && access_token
    && access_token_secret
  ) {
    const twit = new Twit({
      consumer_key,
      consumer_secret,
      access_token,
      access_token_secret,
      strictSSL: true
    })

    twit.get('account/verify_credentials', { skip_status: true })
      .then(response => {
          res.status(200).json({
            loading: false,
            verified: true,
            name: response.data.name
          })
      })
      .catch(e => {
        console.error(e.twitterReply)
        res.status(400).json({
          loading: false,
          verified: false
        })
      })
  } else {
    res.status(400).json({
      loading: false,
      verified: false
    })
  }
}

export default handleGet
