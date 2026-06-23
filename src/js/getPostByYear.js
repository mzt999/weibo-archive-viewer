export default (error) => {
  var perPage = window.weiboProfile.perPage;
  var posts = window.csvData;

  var obj = {};
  var obj2 = {};
  var arr = [];
  var tempYear = posts[0].postTime.substring(0,4);
  var tempMonth = posts[0].postTime.substring(0,7);
  for (let i = 0; i < posts.length; i++) {
    let year = posts[i].postTime.substring(0,4);
    let month = posts[i].postTime.substring(0,7);
    if (!obj[year]) {
      obj[year] = {
        num: year,
        count: 1,
        pageNum: Math.ceil((i+1)/perPage),
        nth: (i+1)%perPage==0?perPage:(i+1)%perPage,
        months: []
      };
      obj2[month] = {
        num: month,
        count: 1,
        pageNum:  Math.ceil((i+1)/perPage),
        nth: (i+1)%perPage==0?perPage:(i+1)%perPage,
      };
    } else {
      obj[year].count++;
      if (!obj2[month]) {
        obj2[month] = {
          num: month,
          count: 1,
          pageNum:  Math.ceil((i+1)/perPage),
          nth: (i+1)%perPage==0?perPage:(i+1)%perPage,
        };
      } else {
        obj2[month].count++;
      }
    }
    if (year!=tempYear) {
      obj[tempYear].months.push(obj2[tempMonth]);
      arr.push(obj[tempYear]);
      tempYear = year;
      tempMonth = month;
      if (i==posts.length-1) {
        obj[tempYear].months.push(obj2[tempMonth]);
        arr.push(obj[tempYear]);
      }
    } else {
      if (month!=tempMonth) {
        obj[tempYear].months.push(obj2[tempMonth]);
        tempMonth = month;
        if (i==posts.length-1) {//如果只有一年就只统计一年的
          obj[tempYear].months.push(obj2[tempMonth]);
          arr.push(obj[tempYear]);
        }
      } else {
        if (i==posts.length-1) {
          obj[tempYear].months.push(obj2[tempMonth]);
          arr.push(obj[tempYear]);
        }
      }
    }
  }
  return arr;
}