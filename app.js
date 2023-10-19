const schedule = require('node-schedule');

//* at a particular date and time 

// const someDate = new Date('2023-10-19T19:27:00.000+5:30');
// schedule.scheduleJob(someDate,()=>{
//     console.log('job ran ',new Date().toString())
// });

//* at recurrent intervals 

//using cron expression

const emailjobs = schedule.scheduleJob('*/2 * * * * *',()=>{
    //writing interval after 2sec
    console.log('I ran the job at every interval')
    emailjobs.cancel() // for cancelling 

})

//* cancelling jobs 