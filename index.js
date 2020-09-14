const schedule = require("node-schedule");
const request = require('request');

var resData = {
    "msgtype": "text",
    "text": {
        "content": "需要发送的消息",
        "mentioned_list": ["wangqing","@all"],
        "mentioned_mobile_list":["13800001111","@all"]
    }
};

function requestfun() {
    // url 为企业机器人的webhook
    request({
        url: "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxxxx",
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(resData)
    }, function (error, response, body) {
        console.log('提示成功！');
    });
}

const scheduleCronstyle = () => {
    //每分钟的第30秒定时执行一次:
    schedule.scheduleJob('* 15 18 * * 1-5', () => {
        requestfun();
        // console.log('scheduleCronstyle:' + new Date());
    });
}

scheduleCronstyle();
console.log('Start successfully');


