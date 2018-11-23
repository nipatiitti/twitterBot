import Twit from 'twit'

async function handlePost(req, res) {
  const {
    consumer_key,
    consumer_secret,
    access_token,
    access_token_secret,
    tweet,
    media,
    delay
  } = req.body

  if(
    consumer_key
    && consumer_secret
    && access_token
    && access_token_secret
    && tweet && tweet !== ''
  ) {
    const twit = new Twit({
      consumer_key,
      consumer_secret,
      access_token,
      access_token_secret,
      strictSSL: true
    })

    if(delay) {
      setTimeout(() => {
        if(media) {
          sendMediaTweetDelay(twit, media, tweet)
        } else {
          sendTweetDelay(twit, tweet)
        }
        console.log('\nTweeting: ' +  tweet + '\nAfter ' + delay + 'h of delay\n')
      }, delay*3600000)
      res.status(200).json({success: true})
    } else {
      if(media) {
        sendMediaTweet(req, res, twit, media, tweet)
      } else {
        sendTweet(req, res, twit, tweet)
      }
    }
  } else {
    res.status(400).json({success: false, message: 'empty fields' })
  }
}

const sendMediaTweetDelay = (twit, media, tweet) => {
  twit.post('media/upload', { media_data: media.split(',')[1] })
  .then(({data}) => {
      twit.post('media/metadata/create', { media_id: data.media_id_string, alt_text: { text: 'image' }})
      .then(response => {
          twit.post('statuses/update', { status: tweet, media_ids: [data.media_id_string] })
          .then(() => {})
          .catch(e => console.error(e))
      })
      .catch(e => console.error(e))
  })
  .catch(e => console.error(e))
}

const sendTweetDelay = (twit, tweet) => {
  twit.post('statuses/update', { status: tweet })
    .then(response => {})
    .catch(e => console.error(e))
}

const sendMediaTweet = (req, res, twit, media, tweet) => {
  twit.post('media/upload', { media_data: media.split(',')[1] })
  .then(({data}) => {

      twit.post('media/metadata/create', { media_id: data.media_id_string, alt_text: { text: 'image' }})
      .then(response => {

          twit.post('statuses/update', { status: tweet, media_ids: [data.media_id_string] })
          .then(() => {
            res.status(200).json({success: true})
          })
          .catch(e => {
            console.error(e)
            res.status(400).json({success: false, message: 'Error sendind the tweet'})
          })

      })
      .catch(e => {
        console.error(e)
        res.status(400).json({success: false, message: 'Error adding alt text'})
      })

  })
  .catch(e => {
    console.error(e)
    res.status(400).json({success: false, message: 'Error sending the media'})
  })
}

const sendTweet = (req, res, twit, tweet) => {
  twit.post('statuses/update', { status: tweet })
    .then(response => {
        res.status(200).json({success: true})
    })
    .catch(e => {
      console.error(e)
      res.status(400).json({success: false, message: 'Error sending the tweet' })
    })
}

export default handlePost
