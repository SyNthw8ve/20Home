const tf = require('@tensorflow/tfjs-node');

const data = [
    { date: 1586732400000, cases: 15804 },
    { date: 1586818800000, cases: 16122 },
    { date: 1586905200000, cases: 16534 },
    { date: 1586991600000, cases: 17109 },
    { date: 1587078000000, cases: 17719 },
    { date: 1587164400000, cases: 17846 },
    { date: 1587250800000, cases: 18388 },
    { date: 1587337200000, cases: 18882 },
    { date: 1587423600000, cases: 19518 },
    { date: 1587510000000, cases: 19700 },
    { date: 1587596400000, cases: 20054 },
    { date: 1587682800000, cases: 20332 },
    { date: 1587769200000, cases: 20715 },
    { date: 1587855600000, cases: 21235 },
    { date: 1587942000000, cases: 21632 },
    { date: 1588032000000, cases: 21742 },
    { date: 1588550400000, cases: 22550 },
    { date: 1588636800000, cases: 22749 },
    { date: 1588723200000, cases: 22885 },
    { date: 1586732400000, cases: 15804 },
    { date: 1586818800000, cases: 16122 },
    { date: 1586905200000, cases: 16534 },
    { date: 1586991600000, cases: 17109 },
    { date: 1587078000000, cases: 17719 },
    { date: 1587164400000, cases: 17846 },
    { date: 1587250800000, cases: 18388 },
    { date: 1587337200000, cases: 18882 },
    { date: 1587423600000, cases: 19518 },
    { date: 1587510000000, cases: 19700 },
    { date: 1587596400000, cases: 20054 },
    { date: 1587682800000, cases: 20332 },
    { date: 1587769200000, cases: 20715 },
    { date: 1587855600000, cases: 21235 },
    { date: 1587942000000, cases: 21632 },
    { date: 1588032000000, cases: 21742 },
    { date: 1588550400000, cases: 22550 },
    { date: 1588636800000, cases: 22749 },
    { date: 1588723200000, cases: 22885 },
    { date: 1586732400000, cases: 15804 },
    { date: 1586818800000, cases: 16122 },
    { date: 1586905200000, cases: 16534 },
    { date: 1586991600000, cases: 17109 },
    { date: 1587078000000, cases: 17719 },
    { date: 1587164400000, cases: 17846 },
    { date: 1587250800000, cases: 18388 },
    { date: 1587337200000, cases: 18882 },
    { date: 1587423600000, cases: 19518 },
    { date: 1587510000000, cases: 19700 },
    { date: 1587596400000, cases: 20054 },
    { date: 1587682800000, cases: 20332 },
    { date: 1587769200000, cases: 20715 },
    { date: 1587855600000, cases: 21235 },
    { date: 1587942000000, cases: 21632 },
    { date: 1588032000000, cases: 21742 },
    { date: 1588550400000, cases: 22550 },
    { date: 1588636800000, cases: 22749 },
    { date: 1588723200000, cases: 22885 }
]



let X_train = data.map(record => {

    return record.date;

})

console.log(X_train)

let  Y_train =data.map(record => {

    return record.cases;

})

console.log(Y_train)

const last_value = new Date(data.pop().recordDate).getTime();

let model = tf.sequential([
    tf.layers.lstm({ units: 20, returnSequences: true, inputShape: X_train.shape}),
    tf.layers.lstm({ units: 20, returnSequences: true }),
    tf.layers.timeDistributed({ layer: tf.layers.dense({ units: 10 }) })
]);

model.compile({
    optimizer: 'adam',
    loss: 'meanSquaredError',
    metrics: ['mse']
});

model.summary();

function onBatchEnd(batch, logs) {

    this.logger.log(`Model erro: ${logs.acc}`);
}


model.fit(X_train, Y_train, {

    epochs: 5,
    batchSize: 32,
    callbacks: { onBatchEnd },
    validationSplit: 0.2

}).then(info => {
    console.log('Final accuracy', info.history.acc);
});

for (let i = 1; i <= 10; i++) {

    let next_pred = tf.tensor1d([last_value + 86400000 * i]);

    let prediction = model.predict(next_pred);
    console.log(prediction);
}