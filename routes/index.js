var express = require('express');
var router = express.Router();

const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  brokers: [process.env.KAFKA_HOST || 'localhost:9092'],
  clientId: 'example-consumer',
})
const producer = kafka.producer();

/* GET home page. */
router.get('/',async function(req, res, next) {
  res.render('index', { title: 'Express' });
  await producer.send({
    topic: 'prueba',
    messages: [ 'hola mundo' ]
  })
});

module.exports = router;
