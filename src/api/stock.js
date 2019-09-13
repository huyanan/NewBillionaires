let request = require('request')
let path = require('path');
let config = require(path.join(__dirname, '../../config/index.js'));
let crypto = require('crypto');
// let md5 = crypto.createHash('md5');
let urlencode = require('urlencode');
// let Promise = require('Promise');

function md5Sign (sign) {
  return crypto.createHash('md5').update(sign).digest('hex');
}


// 获取股票对照表
function getStockList(params) {
  // console.log(config);

  const user_key = config.user_key;
  const user_secret = config.user_secret;
  // 可在每个数据源的"数据"页查看
  const source_id = 8840542;
  // 时间戳
  const timestamp = (new Date()).getTime();
  // sign
  const sign = md5Sign(user_key + timestamp + user_secret);
  // gt
  const cursor = params.cursor || 0;
  // pagesize
  const pageSize = 10000;
  // sort
  const sort = 'asc';


  // console.log(user_key + timestamp + user_secret)
  // console.log(sign)

  let query = `source(__id: {gt: ${cursor}}, limit: ${pageSize}, sort: "${sort}"){data{}, page_info{has_next_page, end_cursor}}`;
  let url = `https://graphql.shenjian.io/?`
           + `user_key=${user_key}&timestamp=${timestamp}&sign=${sign}`
           + `&source_id=${source_id}&query=${urlencode(query)}`;
  return new Promise(function(resolve,reject){
    request({
        url: url,
        method: 'get',
        json: true,
        headers: {
            "content-type": "application/json",
        }
    }, function(error, response, body) {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    });
  });
}

// 获取所有的股票数据
async function getAllStock () {
  let cursor = 0;
  let has_next_page = true;
  let tryCount = 0;

  do {
    let body = await getStockList({
      cursor
    })
    if (body && body.code === 0) {
      tryCount = 0;
      let page_info = body.result.page_info;
      // 更新cursor, 下次从新的cursor开始查
      cursor = page_info['end_cursor'];
      has_next_page = page_info['has_next_page'];
      let items = body['result']['data'];
      items.forEach(function (item) {
        console.log(JSON.stringify(item));
      })
    } else {
      tryCount++
      // 重试3次还是失败, 退出前记录cursor, 以便下次继续
      if (tryCount > 3) {
          console.log(`try too many times, cursor: ${cursor}\n`);
      }
    }
  } while (true);
}

getAllStock();